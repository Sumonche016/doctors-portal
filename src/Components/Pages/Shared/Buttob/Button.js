const Button = ({ children }) => {

    return (
        <div>
            <button class=" drop-shadow-md btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] mt-5 text-white">{children}</button>
        </div>
    );
};

export default Button;