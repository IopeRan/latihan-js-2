const value1 = parseInt("1"); // parseInt digunakan untuk mengubah string 1 di konversi menjadi bilangan bulat 
const value2 = 1;
const sum = value1 + value2;

document.writeln(`<p>${sum}</p>`);

document.writeln(`<p>${parseInt("1.9")}</p>`) // parseInt digunakan untuk mengkonversi string ke bilangan bulat
document.writeln(`<p>${parseFloat("1.1")}</p>`) // parseFloat digunakan untuk mengubah string menjadi bilangan pecahan
document.writeln(`<p>${Number("1.1")}</p>`) // Number digunakan untuk mengkonversi string menjadi bilangan bulat atau pecahan

const a = 1;
const b = 1;
const total = a.toString() + b.toString(); // toString untuk mengkonversi ke string
document.writeln(`<p>${total}</p>`);

document.writeln(`<p>${parseInt("1salah")}</p>`) // menghasikan NaN
document.writeln(`<p>${parseFloat("1.1eko")}</p>`) // menghasikan NaN

// Number tidak akan mentolerir kesalahan data
document.writeln(`<p>${Number("1salah")}</p>`)  
document.writeln(`<p>${Number("1.1eko")}</p>`)
// akan menghasilkan NaN

document.writeln(`<p>${isNaN(10)}</p>`); // bernilai false karna bukan NaN