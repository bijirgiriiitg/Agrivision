import { baseURL } from "../../Apis"
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}
const __DEV__ = document.domain === 'localhost'

export const paymentHandler = async (amount,courseIds,testSeriesIds,packageIds,origin,refral,articlePayment) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}
		const data = await fetch(`${baseURL}/payment/${amount}`, { 
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
			},

			body: JSON.stringify({courseIds,testSeriesIds,packageIds,origin,shareAndEarn:refral,articlePayment})
		}).then((respon) =>respon.json())
		const options = {
			key: __DEV__ ? 'rzp_live_aWVMU7bfD7THbD' : 'rzp_live_aWVMU7bfD7THbD',

			currency: data.body.currency,
			amount: amount*100,
			order_id: data.body.id,
			name: 'AgriVision4U',
			description: "Agrivision4U",
			image: '/images/white_logo.svg',
			handler: function (response) {
				alert(`Success (Payment ID: ${response.razorpay_payment_id})`)
			},
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
  };

