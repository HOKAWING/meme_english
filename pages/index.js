import 'bootstrap/dist/css/bootstrap.min.css'
import {useRouter} from 'next/router'

export default function HomePage() {
    const router = useRouter()

    const book_now = () => {
        router.push('/login')
    }

    return (
        <>
            <header>
                <div class="navbar navbar-dark bg-dark shadow-sm">
                    <div class="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="mr-2">
                                <path
                                    d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                            <strong>Meme Talk</strong>
                        </a>
                    </div>
                </div>
            </header>

            <p/>
            <p/>

            <main role="main">
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">Learn to speak a language with confidence</h1>
                        <p/>
                        <p class="lead text-muted">
                            Meme Talke offers professional online language tutors and teachers from around the world. Have fun learning English!
                        </p>
                        <p>
                        </p>
                        <p>
                        </p>
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </section>

                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="alert alert-info" role="alert">
                                    Our Best Teacher!!
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="card mb-4 shadow-sm">
                                            <img src="/images/teacher1.jpg"
                                                 className="card-img-top"
                                                 data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                                 alt="Card image cap"/>
                                            <div class="card-body">
                                                <p class="card-text">Hi everyone, Let me greet you all! It's my job to assist you to achieve the results you need and want in your exams.I will support and guide you to exploit English for every situation.</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button" onClick={book_now}
                                                                className="btn btn-sm btn-outline-secondary">Book
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-sm btn-outline-secondary">View
                                                        </button>
                                                    </div>
                                                    <small class="text-muted">3 years</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card mb-4 shadow-sm">
                                            <img src="/images/teacher1.jpg" className="card-img-top"
                                                 data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                                 alt="Card image cap"/>
                                            <div class="card-body">
                                                <p class="card-text">Hi everyone, Let me greet you all! It's my job to assist you to achieve the results you need and want in your exams.I will support and guide you to exploit English for every situation.</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button" onClick={book_now}
                                                                className="btn btn-sm btn-outline-secondary">Book
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-sm btn-outline-secondary">View
                                                        </button>
                                                    </div>
                                                    <small class="text-muted">3 years</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card mb-4 shadow-sm">
                                            <img src="/images/teacher1.jpg" className="card-img-top"
                                                 data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                                 alt="Card image cap"/>
                                            <div class="card-body">
                                                <p class="card-text">Hi everyone, Let me greet you all! It's my job to assist you to achieve the results you need and want in your exams.I will support and guide you to exploit English for every situation.</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button" onClick={book_now}
                                                                className="btn btn-sm btn-outline-secondary">Book
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-sm btn-outline-secondary">View
                                                        </button>
                                                    </div>
                                                    <small class="text-muted">3 years</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="card mb-4 shadow-sm">
                                            <img src="/images/teacher1.jpg" className="card-img-top"
                                                 data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                                 alt="Card image cap"/>
                                            <div class="card-body">
                                                <p class="card-text">Hi everyone, Let me greet you all! It's my job to assist you to achieve the results you need and want in your exams.I will support and guide you to exploit English for every situation.</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button" onClick={book_now}
                                                                className="btn btn-sm btn-outline-secondary">Book
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-sm btn-outline-secondary">View
                                                        </button>
                                                    </div>
                                                    <small class="text-muted">3 years</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card mb-4 shadow-sm">
                                            <img src="/images/teacher1.jpg" className="card-img-top"
                                                 data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                                 alt="Card image cap"/>
                                            <div class="card-body">
                                                <p class="card-text">Hi everyone, Let me greet you all! It's my job to assist you to achieve the results you need and want in your exams.I will support and guide you to exploit English for every situation.</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button" onClick={book_now}
                                                                className="btn btn-sm btn-outline-secondary">Book
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-sm btn-outline-secondary">View
                                                        </button>
                                                    </div>
                                                    <small class="text-muted">3 years</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card mb-4 shadow-sm">
                                            <img src="/images/teacher1.jpg" className="card-img-top"
                                                 data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                                 alt="Card image cap"/>
                                            <div class="card-body">
                                                <p class="card-text">Hi everyone, Let me greet you all! It's my job to assist you to achieve the results you need and want in your exams.I will support and guide you to exploit English for every situation.</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button" onClick={book_now}
                                                                className="btn btn-sm btn-outline-secondary">Book
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-sm btn-outline-secondary">View
                                                        </button>
                                                    </div>
                                                    <small class="text-muted">3 years</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div class="d-grid gap-2 container">
                <button type="button" className="btn btn-info" onClick={book_now}>Book Now</button>
            </div>

            <p/>
            <p/>

            <footer class="text-muted">
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                        </div>
                        <div class="col">
                        </div>
                        <div class="col">
                            <a href="#">Back to top</a>
                        </div>
                    </div>
                </div>
            </footer>
            <p/>
            <p/>
            <p/>
        </>
    );
}
