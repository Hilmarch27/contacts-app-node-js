const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
       contacts.simpanContact(argv.nama, argv.email, argv.noHP);
}
}).demandCommand();

// menampilkan daftar semua nama & no HP contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        contacts.listContact();
    }
});


// menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
});

//menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
});

yargs.parse();









// const contacts = require('./contacts');

// const main = async () => {
//   const nama = await contacts.tulisPertanyaan('Masukkan nama anda: ');
//   const email = await contacts.tulisPertanyaan('Masukkan email anda: ');
//   const noHP = await contacts.tulisPertanyaan('Masukkan No HP anda: ');

//   contacts.simpanContact(nama, email, noHP);
// };

// main();

