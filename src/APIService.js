

export default class APIService {

    static UpdateBiodata(biodata_id, body){
        
        return fetch(`http://127.0.0.1:8000/userBackend/biodata/${biodata_id}/`, {

            'method': 'PUT',

            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token 6f2f0bfed775c7b292096a108b1acd25bcc3cb13'
              },
              body:JSON.stringify(body)

        }).then(resp => resp.json())

    }

    static InsertBiodata(body){
        return fetch(`http://127.0.0.1:8000/userBackend/biodata/`, {
            'method': 'POST',

            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token 6f2f0bfed775c7b292096a108b1acd25bcc3cb13'
              },
              body:JSON.stringify(body)
        
            }).then(resp => resp.json())
    }
    
    static DeleteBiodata(biodata_id){
        return fetch(`http://127.0.0.1:8000/userBackend/biodata/${biodata_id}/`, {

            'method': 'DELETE',

            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token 6f2f0bfed775c7b292096a108b1acd25bcc3cb13'
              }

        })
    }
}