import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/teacher.module.css'

export default function Teacher() {
    const book = () => {
    }

    const tickets = [{id: 1}, {id: 2}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}
        , {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}]

    return (
        <>
            <div className="container">
                <div className={styles.teachers_list}>
                <ol className="list-group list-group-numbered">
                    {
                        tickets.map(
                            (
                                {
                                    id,
                                },
                                idx
                            ) => (
                                <li key={idx}
                                    className="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Subheading</div>
                                        Content for list item
                                    </div>
                                    <span class="bg-primary rounded-pill">
                                        <button type="button" className="btn btn-info" onClick={book}>Book</button>
                                    </span>
                                </li>
                            ))}
                </ol>
                </div>
            </div>
        </>
    )
}