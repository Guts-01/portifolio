import { useEffect } from "react";

const TawkChat = () => {
    useEffect(() => {
        var Tawk_API = Tawk_API || {};
        (function () {
            var s1 = document.createElement("script");
            s1.async = true;
            s1.src = "https://embed.tawk.to/67e0a00a8ce335191176a2ca/1in2n2ad8";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            document.body.appendChild(s1);
        })();
    }, []);

    return null; 
};

export default TawkChat;



