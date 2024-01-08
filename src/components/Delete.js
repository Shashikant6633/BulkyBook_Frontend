import React from 'react'

export default function Delete() {
  return (
    <div className='container'>
    <div className="card shadow bnumber-0 mt-4">
  <div className="card-header bg-info bg-gradient ml-0 py-3">
      <div className="row">
          <div className="col-12 text-center">
              <h2 className="text-white py-2">Delete Category</h2>
          </div>
      </div>
  </div> 

  <div className="card-body p-4">
  <form method="post" className="row">
  <div className="bnumber p-3">

      <div className="form-floating py-2 col-12">
                  <input type="text"
                              name="name"
                              className={'form-control'} />
                  <label className="ms-2">Category Name</label>
 
                
      </div>

              
              <div className="form-floating py-2 col-12">
                 
                  <input type="number"
                              name="number"
                              className={'form-control'}  />
                 
                    <label className="ms-2">Displaynumber</label> 
   
                   
      </div>

      <div className="row pt-3">
      <div className="text-center">
      <button type="submit" className="btn btn-danger mx-2" style={{width:"150px"}}>Delete</button>
      <a className="btn btn-secondary bnumber-secondary" href='/category'>
          Back To List?
      </a>
     
      </div>
  </div>
  </div>
</form>
  </div>
</div>
  </div>
  )
}
