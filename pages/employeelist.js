import { Header, Layout, Modal, Pagination, Table } from "@/components";
import Link from "next/link";

function Landing() {
	return (
		<div>
			{" "}
			<Layout>
				<Header />
				<Table />
				<Pagination />
				<Modal />
				<div className="go-back">
					<Link href="/">GO BACK</Link>
				</div>
			</Layout>{" "}
		</div>
	);
}

export default Landing;
