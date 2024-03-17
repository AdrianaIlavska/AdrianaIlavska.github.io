document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { Vedouci: 'Bechná', Pocet_praci: 7 },
        { Vedouci: 'Brussenbauch Meislová', Pocet_praci: 18 },
        { Vedouci: 'Chovančík', Pocet_praci: 15 },
        { Vedouci: 'Dančák', Pocet_praci: 0 },
        { Vedouci: 'Fiala', Pocet_praci: 0 },
        { Vedouci: 'Fridrichová', Pocet_praci: 12 },
        { Vedouci: 'Halašková (takz. RD)', Pocet_praci: 0 },
        { Vedouci: 'Havlík', Pocet_praci: 7 },
        { Vedouci: 'Hloušek', Pocet_praci: 4 },
        { Vedouci: 'Hodulák', Pocet_praci: 15 },
        { Vedouci: 'Janšta', Pocet_praci: 5 },
        { Vedouci: 'Jirušek', Pocet_praci: 2 },
        { Vedouci: 'Kaniok', Pocet_praci: 5 },
        { Vedouci: 'Konvalinová', Pocet_praci: 5 },
        { Vedouci: 'Koďousková', Pocet_praci: 6 },
        { Vedouci: 'Kořan', Pocet_praci: 6 },
        { Vedouci: 'Krpec', Pocet_praci: 7 },
        { Vedouci: 'Kuchyňková', Pocet_praci: 12 },
        { Vedouci: 'Kříž', Pocet_praci: 17 },
        { Vedouci: 'Lehotský', Pocet_praci: 5 }
      ];

    const dataTable = $('#dataTable').DataTable({
        data: data.map(item => [item.Vedouci, item.Pocet_praci]),
        columns: [
            { title: "Vedoucí" },
            { title: "Počet prací" }
        ],
        createdRow: function(row, data, dataIndex) {
            const praci = data[1];
            if (praci <= 5) {
                $(row).addClass('green');
            } else if (praci > 5 && praci <= 10) {
                $(row).addClass('orange');
            } else {
                $(row).addClass('red');
            }
        }
    });
});
