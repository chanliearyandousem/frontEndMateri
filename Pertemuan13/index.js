// clalss in js 
//--------------------------

// const mobil = { 
//     transmisi: "manual",
//     bahanBakar: 'bensin',
//     mesain: 1500,    
// };

// console.log(mobil);

// const mobil2 ={ 
//     transmisi: "manual",
//     bahanBakar: 'bensin',
//     mesain: 1500,
// };

class Mobil {
    constructor(transmisi, bahanBakar, mesin) {
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }

    nyalakanMesin() {
        console.log(`mesin ${this.transmisi} dinyalakan`);
    }
}

// const mobil1 = new Mobil("manual", "bensin", 1500);
// const mobil2 = new Mobil("auto", "bensin", 1500);
// console.log(mobil1);


// mobil1.nyalakanMesin();
class Toyota extends Mobil {
    constructor(merek, warna, transmisi, bahanBakar, mesin) {
        super(transmisi, bahanBakar, mesin);
        this.merek = merek;
        this.warna = warna;
    }
}

const agya = new Toyota("Agya", "merah", "manual", "bensin", 1500);
agya.nyalakanMesin();
console.log(agya);
