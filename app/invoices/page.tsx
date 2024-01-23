import Link from 'next/link'

export default function Page() {
	return (
		<>
			<Link href="/">Go to Main Page</Link>
			<Link href="/invoices/123">Invoice 123</Link>
		</>
	)
}
