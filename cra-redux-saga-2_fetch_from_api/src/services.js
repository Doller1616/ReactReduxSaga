const Services = () => {

  (function initialize(){
      // Constructor
  })()

try {
  return {
    fetchData: async () => {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        return data;
      }
   }




  } catch (e) { console.log(e) }

}

export default Services()

