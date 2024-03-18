document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { Vedouci: 'Mgr. Zinaida Bechná, Ph.D.', Oblast_expertizy: 'vnitrostátní a etnické konflikty, Kavkaz, Rusko, NATO', Pocet_praci: 7 },
        { Vedouci: 'doc. Monika Brusenbauch Meislová, Ph.D.', Oblast_expertizy: 'Brexit; Velká Británie; politický diskurz; vztahy Velké Británie a EU', Pocet_praci: 18 },
        { Vedouci: 'doc. Mgr. Filip Černoch, Ph.D.', Oblast_expertizy: 'energetické vládnutí; energetická tranzice; energetická spravedlnost', Pocet_praci: 3 },
        { Vedouci: 'PhDr. Vladimír Černý, Ph.D.', Oblast_expertizy: 'dějiny 20. století; Rakousko, Německo, UK; soudobé dějiny', Pocet_praci: 16 },
        { Vedouci: 'Mgr. Martin Chovančík, Ph.D.', Oblast_expertizy: 'zbrojní průmysl; obchod se zbraněmi; sankce; ozbrojené konflikty', Pocet_praci: 15 },
        { Vedouci: 'doc. PhDr. Břetislav Dančák, Ph.D.', Oblast_expertizy: 'střední evropa, zahraniční politika USA, NATO', Pocet_praci: 0 },
        { Vedouci: 'prof. PhDr. Petr Fiala, Ph.D., LL.M.', Oblast_expertizy: 'srovnávací politologie, evropská politika', Pocet_praci: 0 },
        { Vedouci: 'Mgr. Kateřina Fridrichová, Ph.D.', Oblast_expertizy: 'etika, náboženstvo, conflict resolution', Pocet_praci: 12 },
        { Vedouci: 'Barbora Halašková, Ph.D.', Oblast_expertizy: '(Dlouhodobě mimo výkon práce)', Pocet_praci: 0 },
        { Vedouci: 'doc. Vratislav Havlík, Ph.D.', Oblast_expertizy: 'víceúrovňové vládnutí; evropeizace; města a regiony v EU; iliberalismus', Pocet_praci: 7 },
        { Vedouci: 'prof. PhDr. Vít Hloušek, Ph.D.', Oblast_expertizy: 'politické strany; politické instituce; soudobé dějiny', Pocet_praci: 4 },
        { Vedouci: 'Mgr. Vladan Hodulák, Ph.D.', Oblast_expertizy: 'mezinárodni politická ekonomie; mezinárodní ekonomické organizace; mezinárodní měnový systém; eurozóna', Pocet_praci: 15 },
        { Vedouci: 'Mgr. et Mgr. Denis Janšta', Oblast_expertizy: 'postsovětský prostor, Rusko, vztahy ČR/SR s Ruskem', Pocet_praci: 5 },
        { Vedouci: 'Mgr. Martin Jirušek, Ph.D.', Oblast_expertizy: 'geopolitika, energetická bezpečnost, střední a východní Evropa, USA', Pocet_praci: 5 },
        { Vedouci: 'prof. PhDr. Petr Kaniok, Ph.D.', Oblast_expertizy: 'instituce EU; euroskepticismus; Skandinávie; parlamentarismus', Pocet_praci: 5 },
        { Vedouci: 'Mgr. Anežka Konvalinová', Oblast_expertizy: 'energetická tranzice, střední evropa, Pobaltí, evropská politika', Pocet_praci: 5 },
        { Vedouci: 'Mgr. Hedvika Koďousková, Ph.D.', Oblast_expertizy: 'energetická chudoba; energetická zranitelnost; dopady energetické tranzice; energetické politiky v Asii', Pocet_praci: 6 },
        { Vedouci: 'PhDr. Michal Kořan, Ph.D.', Oblast_expertizy: 'Technologie a globalizace; Zahraniční politika; Střední Evropa; globalizace a deglobalizace', Pocet_praci: 6 },
        { Vedouci: 'doc. Mgr. et Mgr. Oldřich Krpec, Ph.D.', Oblast_expertizy: 'hospodářská politika střední Evropy; čínská expanze a Evropa; zbrojní průmysl; hospodářský rozvoj', Pocet_praci: 7 },
        { Vedouci: 'Mgr. Petra Kuchyňková, Ph.D.', Oblast_expertizy: 'EU integrace; EU SZBP; Vých.partnerství, Rusko; společná zeměď.pol.', Pocet_praci: 12 },
        { Vedouci: 'prof. PhDr. Zdeněk Kříž, Ph.D.', Oblast_expertizy: 'NATO; transatlatnické vztahy; Ukrajina; Německo', Pocet_praci: 17 },
        { Vedouci: 'Mgr. Lukáš Lehotský, Ph.D.', Oblast_expertizy: 'diskurzivní sítě; uhelná politika; klimatické hnutí', Pocet_praci: 5 },
        { Vedouci: 'JUDr. Ing. Jan Lhotský, Ph.D., E.MA', Oblast_expertizy: 'lidská práva; mezinárodní právo; demokracie; mezinárodní soudy', Pocet_praci: 3 },
        { Vedouci: 'RNDr. Petr Marek, Ph.D.', Oblast_expertizy: 'regionální geografie, regionální identita, regionalismus, Evropa', Pocet_praci: 2 },
        { Vedouci: 'Mgr. Lenka Martínková', Oblast_expertizy: 'to_be_added', Pocet_praci: 5 },
        { Vedouci: 'doc. Mgr. Petr Ocelík, Ph.D.', Oblast_expertizy: 'politické sítě; klimatická politika; politické diskursy', Pocet_praci: 5 },
        { Vedouci: 'doc. Mgr. Jan Osička, Ph.D.', Oblast_expertizy: 'Energetická tranzice; Energetická politika; Dekarbonizace; Politický diskurs', Pocet_praci: 14 },
        { Vedouci: 'Ing. Bohuslav Pernica, Ph.D.', Oblast_expertizy: '', Pocet_praci: 0 },
        { Vedouci: 'JUDr. Mgr. Ivo Pospíšil, Ph.D.', Oblast_expertizy: 'mezinárodní právo; právo EU; soudnictví, judicializace politiky; národnostní menšiny', Pocet_praci: 2 },
        { Vedouci: 'doc. PhDr. Markéta Pitrová, Ph.D.', Oblast_expertizy: 'EU integrace; EU instituce; lobbing', Pocet_praci: 5 },
        { Vedouci: 'Zuzana Ringlerová, Ph.D.', Oblast_expertizy: 'Veřejné mínění; Volební chování; USA: vnitřní politika', Pocet_praci: 9 },
        { Vedouci: 'PhDr. Petr Suchý, Ph.D.', Oblast_expertizy: 'jaderné zbraně a odstrašování; kontrola zbrojení; USA: zahraniční politika; USA ve studené válce', Pocet_praci: 5 },
        { Vedouci: 'Ing. Mgr. Petr Svatoň', Oblast_expertizy: 'americko-čínské vztahy, ekonomika Číny, hospodářské dějiny', Pocet_praci: 10 },
        { Vedouci: 'Mgr. Jana Urbanovská, Ph.D.', Oblast_expertizy: 'Německo; česko-německé vztahy; zahraniční politika; bezpečnostní a obranná politika', Pocet_praci: 9 },
        { Vedouci: 'Mgr. et Mgr. Veronika Velička Zapletalová, Ph.D.', Oblast_expertizy: 'instituce EU; energetická politika EU; energetické vládnutí; střední Evropa', Pocet_praci: 5 },
        { Vedouci: 'doc. PhDr. Tomáš Vlček, Ph.D.', Oblast_expertizy: 'Energetická bezpečnost; Střední a východní Evropa; Energetická politika; Jaderná energetika', Pocet_praci: 7 },
        { Vedouci: 'Mgr. Vladimir Vučković, Ph.D.', Oblast_expertizy: 'západní Balkán, rozšiřování EU, geopolitika, populismus', Pocet_praci: 3 }
      ];

    const dataTable = $('#dataTable').DataTable({
        data: data.map(item => [item.Vedouci, item.Oblast_expertizy, item.Pocet_praci]),
        columns: [
            { title: "Vedoucí" },
            { title: "Oblast expertizy" },
            { title: "Počet prací" }
        ],
        createdRow: function(row, data, dataIndex) {
            const praci = data[2];
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
