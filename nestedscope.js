function foo() {
    var a = 1;
    
    function mo() {
        var m = 10;

        function bim() {
            var c = 15;

            console.log(a,m,c);
        }
        bim();
        console.log(a,m);
        
    }
    mo();
    console.log(a);
}
foo()