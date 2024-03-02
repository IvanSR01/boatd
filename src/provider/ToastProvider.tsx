import { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
interface IToastProvider {
	children: ReactNode
}

const ToastProvider: FC<IToastProvider> = ({ children }) => {
	return (
		<>
			{children}
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={window.localStorage.theme}
			/>
		</>
	)
}
export default ToastProvider
