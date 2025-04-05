const Button = (props) => {
    const {varian, children,type, onClick = () => {}} = props
    return (
      <button 
        className={`h-10 px-6 font-semibold rounded-md ${varian} text-white`} 
        type={type}
        onClick={onClick}
        >
      {children}
    </button>
  );
  }

  export default Button;