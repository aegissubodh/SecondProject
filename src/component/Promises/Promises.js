import React from "react";

class Promises extends React.Component{

    constructor(){
        super()
        this.state = {
            data:null,
            loading:true,
            error:null,
        };
    }

    componentDidMount(){

        const fetchData = () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const randomValue = Math.random();
                console.log("number",randomValue);
                if (randomValue < 0.3) {
                  reject(new Error('Data fetch failed'));
                } else {
                  resolve('Fetched data successfully');
                }
              }, 2000);
            });
          };
       
        fetchData()
        .then((data) => {
          this.setState({ data, loading: false });
        })
        .catch((error) => {
          this.setState({ error, loading: false });
        });
    }


    render(){
    const{data,loading,error} = this.state;
    if (loading) {
        return <div>Loading...</div>;
      }
  
      if (error) {
        return <div>Error: {error.message}</div>;
      }
  
      return <div>Data: {data}</div>;

    
       

        
    
    }
}
       
  

export default Promises;
