const changeDeg = () => {
    const cv = document.getElementById('cd').value ;

    let newkv = 273.15 + (cv *1.00 ) ;

    console.log(newkv);

    document.getElementById('kd').value = newkv+"°K ";

    let newfv = (cv * 9/5) + 32;

    console.log(newfv);

    document.getElementById('fd').value = newfv+"°F ";
}
 