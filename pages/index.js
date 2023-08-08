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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="mr-2">
                            <path
                                d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                            <circle cx="12" cy="13" r="4"></circle>
                        </svg>
                        <strong>Album</strong>
                    </a>
                </div>
            </div>
        </header>

        <main role="main">

            <section class="jumbotron text-center">
                <div class="container">
                    <h1 class="jumbotron-heading">Album example</h1>
                    <p class="lead text-muted">Something short and leading about the collection below—its contents, the
                        creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it
                        entirely.</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
            </section>

            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img src="/images/teacher1.jpg"
                                    className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img className="card-img-top"
                                     data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                     alt="Card image cap"/>
                                    <div class="card-body">
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">View
                                                </button>
                                                <button type="button"
                                                        className="btn btn-sm btn-outline-secondary">Edit
                                                </button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/*<div class="row row-cols-1 row-cols-md-3 g-4">*/}
        {/*    <div class="col">*/}
        {/*        <div class="card">*/}
        {/*            <img src="/images/teacher1.jpg" className="card-img-top" alt="..."/>*/}
        {/*                <div class="card-body">*/}
        {/*                    <h5 class="card-title">Card title</h5>*/}
        {/*                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in*/}
        {/*                        to additional content. This content is a little bit longer.</p>*/}
        {/*                </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div class="col">*/}
        {/*        <div class="card">*/}
        {/*            <img src="/images/teacher2.jpg" className="card-img-top" alt="..."/>*/}
        {/*                <div class="card-body">*/}
        {/*                    <h5 class="card-title">Card title</h5>*/}
        {/*                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in*/}
        {/*                        to additional content. This content is a little bit longer.</p>*/}
        {/*                </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div class="col">*/}
        {/*        <div class="card">*/}
        {/*            <img src="/images/teacher3.jpg" className="card-img-top" alt="..."/>*/}
        {/*                <div class="card-body">*/}
        {/*                    <h5 class="card-title">Card title</h5>*/}
        {/*                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in*/}
        {/*                        to additional content.</p>*/}
        {/*                </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div class="col">*/}
        {/*        <div class="card">*/}
        {/*            <img src="/images/teacher4.jpg" className="card-img-top" alt="..."/>*/}
        {/*                <div class="card-body">*/}
        {/*                    <h5 class="card-title">Card title</h5>*/}
        {/*                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in*/}
        {/*                        to additional content. This content is a little bit longer.</p>*/}
        {/*                </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div class="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={book_now}>Book Now</button>
        </div>
    </>
  );
}
