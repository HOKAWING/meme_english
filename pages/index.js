import 'bootstrap/dist/css/bootstrap.min.css'
export default function HomePage() {
  return (
    <>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <img src="/images/teacher1.jpg" className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="/images/teacher2.jpg" className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="/images/teacher3.jpg" className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content.</p>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="/images/teacher4.jpg" className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
        </div>
    </>
  );
}
