import './PaymentButton.scss'
import { useTypedSelector, useActions } from '../../store/hooks'
import { useEffect } from 'react'
import axios from 'axios'

interface PaymentButtonProps {
    price: number
}

declare global {
    interface Window {
        snap: any;
    }
}

const PaymentButton = ({ price }: PaymentButtonProps) => {

    const { user: {currentUser} } = useTypedSelector(state => state)
    const { emptyCart } = useActions()

    const priceInThousands: number = price * 1000;
    const clientKey: any = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;
    const midtransUrl: any = process.env.REACT_APP_MIDTRANS_SCRIPT_URL;
    const baseUrl: any = process.env.REACT_APP_MIDTRANS_BASE_URL

    useEffect(() => {

        let scriptTag = document.createElement('script');
        scriptTag.src = midtransUrl;
        scriptTag.setAttribute('data-client-key', clientKey);
    
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        }
    }, [midtransUrl, clientKey]);

    const handleClick = async () => {

        try {
            const res = await axios({
                url: '/',
                method: 'get',
                baseURL: baseUrl,
                params: {
                    name: currentUser!.displayName,
                    email: currentUser!.email,
                    price: priceInThousands
                }
            })
            const { token } = res.data
            window.snap.pay(token, {
                onSuccess: function(result: any){
                    console.log('success');
                    console.log(result);
                    emptyCart();
                },
                onPending: function(result: any){console.log('pending');console.log(result);},
                onError: function(result: any){console.log('error');console.log(result);},
                onClose: function(){console.log('Customer closed the popup without finishing the payment');}
            })
        } catch (error) {
            console.log('Error retreiving token: ', error.message)
        }
    }

    return (
        <button onClick={handleClick}>Pay Now</button>
    )
}

export default PaymentButton