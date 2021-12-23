import { useSelector, useDispatch } from "react-redux";
import { PencilSVG, TrashSVG } from "@/icons";
import {
	deleteEmployee,
	fetchEmployees,
	setModalOpen,
	setSelectedEmployee,
} from "@/store";
import { useEffect } from "react";

export function Table() {
	const state = useSelector((state) => state.employee);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEmployees());
	}, [dispatch]);

	return (
		<table className="table">
			<thead className="table__head">
				<tr>
					<th className="top-part">Full name</th>
					<th className="top-part">Email</th>
					<th className="top-part">Address</th>
					<th className="top-part">Phone</th>
					<th className="top-part">Edit/Delete</th>
				</tr>
			</thead>

			<tbody className="table__body">
				{state.employeeList.map(({ _id, name, email, address, phone }) => (
					<tr key={_id}>
						<td>{name}</td>
						<td>{email}</td>
						<td>{address}</td>
						<td>{phone}</td>
						<td>
							<button
								className="btn btn__compact btn__edit"
								onClick={() => {
									dispatch(setSelectedEmployee(_id));
									dispatch(setModalOpen(true));
								}}
							>
								<PencilSVG />
							</button>
							<button
								className="btn btn__compact btn__delete"
								onClick={() => {
									dispatch(deleteEmployee(_id));
								}}
							>
								<TrashSVG />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
