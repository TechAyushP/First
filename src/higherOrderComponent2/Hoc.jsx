const Hoc=(WrappedComp)=>{
    return function (){
        return <WrappedComp data="i am comming from hoc" />;
    };

};
export default Hoc;