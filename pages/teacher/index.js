import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/teacher.module.css'

export default function Teacher() {
    const book = () => {
    }

    const tickets = [{id: 1}, {id: 2}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}
        , {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}, {id: 3}]

    return (
        <>
            <p/>
            <p/>
            <p/>
            <div className="container">
                <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Teacher name"
                           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span class="input-group-text" id="basic-addon2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
                                 viewBox="0 0 16 16">
                              <path
                                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                    <div class="row">
                        <div class="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select teacher</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select date</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select session</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                  </div>
                </div>

                剩餘課程：6 次
            </div>

            <p/>

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
                                        <div class="fw-bold">
                                            <div class="text-secondary">Karmiel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <span class="text-primary">預約時間：2023-08-08&nbsp;&nbsp;&nbsp;16:00-16:25</span>
                                        </div>
                                        <img src="/images/teacher1.jpg" alt="Card image cap" width="20%"/>
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