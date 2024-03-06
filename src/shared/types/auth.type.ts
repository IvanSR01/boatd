export type TypeRegisterSeller = {
	name: string,
	surname: string,
	email: string,
	phone: string,
	paymentInfo?: any,
	personalUrl: string,
	password: string
	confirm: string
}

export type TypeLogin = {
	phone: string
	password: string
}
export type TypeRegisterUser = {
	name: string,
	surname: string,
	email: string,
	phone: string,
	password: string
	confirm: string
}