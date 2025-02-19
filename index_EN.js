function initTable() {
    const data = [
      { Vedouci: 'Mgr. Zinaida Bechná, Ph.D. ', Oblast_expertizy: 'internal and ethnic conflicts, Caucasus, Russia, NATO ' , Pocet_praci: 12 },	
      { Vedouci: 'Mgr. et Mgr. Vladimir Bízik, Ph.D. ', Oblast_expertizy: 'Turkey, Middle East, Japan, technology in international relations ' , Pocet_praci: 10 },	
      { Vedouci: 'doc. Monika Brusenbauch Meislová, Ph.D. ', Oblast_expertizy: 'Brexit; United Kingdom; political discourse; UK-EU relations ' , Pocet_praci: 9 },	
      { Vedouci: 'doc. Mgr. Filip Černoch, Ph.D. ', Oblast_expertizy: 'energy governance; energy transition; energy justice ' , Pocet_praci: 14 },	
      { Vedouci: 'PhDr. Vladimír Černý, Ph.D. ', Oblast_expertizy: '20th century history; Austria, Germany, UK; contemporary history ' , Pocet_praci: 10 },	
      { Vedouci: 'Mgr. Kateřina Fridrichová, Ph.D. ', Oblast_expertizy: 'ethics; religion; conflict; international relations theory; humanitarian intervention; Russia ' , Pocet_praci: 10 },	
      { Vedouci: 'Barbora Halašková, Ph.D. ', Oblast_expertizy: '(Inactive employment status) ' , Pocet_praci: 0 },	
      { Vedouci: 'doc. Vratislav Havlík, Ph.D. ', Oblast_expertizy: 'multi-level governance; Europeanisation; cities and regions in the EU; illiberalism ' , Pocet_praci: 4 },	
      { Vedouci: 'Mgr. Vladan Hodulák, Ph.D. ', Oblast_expertizy: 'international political economy; international economic organisations; international monetary system; eurozone ' , Pocet_praci: 10 },	
      { Vedouci: 'Mgr. Martin Chovančík, Ph.D. ', Oblast_expertizy: 'arms industry; arms trade; sanctions; armed conflict ' , Pocet_praci: 8 },	
      { Vedouci: 'Ing. Mgr. Adriana Ilavská, Ph.D. ', Oblast_expertizy: 'Civil wars, conflict escalation, quantitative methods, QCA ' , Pocet_praci: 3 },	
      { Vedouci: 'Mgr. et Mgr. Denis Janšta ', Oblast_expertizy: 'post-Soviet area, Russia, Czech/Slovak - Russian relations ' , Pocet_praci: 7 },	
      { Vedouci: 'Mgr. Martin Jirušek, Ph.D. ', Oblast_expertizy: 'geopolitics, energy security, central and eastern Europe, USA ' , Pocet_praci: 7 },	
      { Vedouci: 'prof. PhDr. Petr Kaniok, Ph.D. ', Oblast_expertizy: 'EU institutions; Euroscepticism; Scandinavia; parliamentarism ' , Pocet_praci: 8 },	
      { Vedouci: 'doc. Mgr. Hedvika Koďousková, Ph.D. ', Oblast_expertizy: 'energy poverty; energy vulnerability; impacts of energy transition; energy policies in Asia ' , Pocet_praci: 3 },	
      { Vedouci: 'Mgr. Anežka Konvalinová ', Oblast_expertizy: 'energy transition, CEE, Baltic states, European policy ' , Pocet_praci: 0 },	
      { Vedouci: 'PhDr. Michal Kořan, Ph.D. ', Oblast_expertizy: 'Technology and globalisation; Foreign policy; Central Europe; Globalisation and deglobalisation ' , Pocet_praci: 7 },	
      { Vedouci: 'Mgr. Et Mgr. Jan Kotýnek Krotký, Ph.D. ', Oblast_expertizy: 'migration policy and discourse, European Parliament, participatory democracy in the EU ' , Pocet_praci: 9 },	
      { Vedouci: 'doc. Mgr. et Mgr. Oldřich Krpec, Ph.D. ', Oblast_expertizy: 'Central European economic policy; Chinese expansion and Europe; arms industry; economic development ' , Pocet_praci: 8 },	
      { Vedouci: 'prof. PhDr. Zdeněk Kříž, Ph.D. ', Oblast_expertizy: 'NATO; transatlantic relations; Ukraine; Germany ' , Pocet_praci: 7 },	
      { Vedouci: 'Mgr. Petra Kuchyňková, Ph.D. ', Oblast_expertizy: 'EU integration; EU CFSP; Eastern Partnership, Russia; common agricultural policy ' , Pocet_praci: 10 },	
      { Vedouci: 'Mgr. Lukáš Lehotský, Ph.D. ', Oblast_expertizy: 'Discursive networks; coal politics; climate movement ' , Pocet_praci: 4 },	
      { Vedouci: 'JUDr. Ing. Jan Lhotský, Ph.D., E.MA ', Oblast_expertizy: 'human rights; international law; democracy; international courts ' , Pocet_praci: 6 },	
      { Vedouci: 'RNDr. Petr Marek, Ph.D. ', Oblast_expertizy: 'regional geography, regional identity, regionalism, Europe ' , Pocet_praci: 5 },	
      { Vedouci: 'Mgr. Lenka Martínková ', Oblast_expertizy: 'Middle East; Iran; Saudi Arabia ' , Pocet_praci: 4 },	
      { Vedouci: 'doc. Mgr. Petr Ocelík, Ph.D. ', Oblast_expertizy: 'political networks; climate policy; political discourses ' , Pocet_praci: 3 },	
      { Vedouci: 'doc. Mgr. Jan Osička, Ph.D. ', Oblast_expertizy: 'Energy transition; Energy policy; Decarbonisation; Political discourse ' , Pocet_praci: 5 },	
      { Vedouci: 'Ing. Bohuslav Pernica, Ph.D. ', Oblast_expertizy: 'transformation of the military sector, defence industry, revolution in military affairs ' , Pocet_praci: 1 },	
      { Vedouci: 'doc. PhDr. Markéta Pitrová, Ph.D. ', Oblast_expertizy: 'EU integration; EU institutions; lobbying ' , Pocet_praci: 2 },	
      { Vedouci: 'JUDr. Mgr. Ivo Pospíšil, Ph.D. ', Oblast_expertizy: 'International law; EU law; judiciary, judicialization of politics; national minorities ' , Pocet_praci: 4 },	
      { Vedouci: 'Zuzana Ringlerová, Ph.D. ', Oblast_expertizy: 'Public opinion; Electoral behaviour; USA: domestic politics ' , Pocet_praci: 6 },	
      { Vedouci: 'PhDr. Petr Suchý, Ph.D. ', Oblast_expertizy: 'Nuclear weapons and deterrence; arms control; US: foreign policy; US in the Cold War ' , Pocet_praci: 3 },	
      { Vedouci: 'Ing. Mgr. Petr Svatoň ', Oblast_expertizy: 'US-China relations, Chinese economy, economic theories and history ' , Pocet_praci: 8 },	
      { Vedouci: 'Mgr. Jana Urbanovská, Ph.D. ', Oblast_expertizy: 'Germany; Czech-German relations; foreign policy; security and defence policy ' , Pocet_praci: 5 },	
      { Vedouci: 'Mgr. et Mgr. Veronika Velička Zapletalová, Ph.D. ', Oblast_expertizy: 'EU institutions; EU energy policy; energy governance; Central Europe ' , Pocet_praci: 11 },	
      { Vedouci: 'doc. PhDr. Tomáš Vlček, Ph.D. ', Oblast_expertizy: 'Energy security; Central and Eastern Europe; Energy policy; Nuclear energy ' , Pocet_praci: 6 },	
      { Vedouci: 'Mgr. Vladimir Vučković, Ph.D. ', Oblast_expertizy: 'Western Balkans, EU enlargement, geopolitics, populism ' , Pocet_praci: 7 }
      ];

      $('#dataTable').DataTable({
        data: data.map(item => [item.Vedouci, item.Oblast_expertizy, item.Pocet_praci]),
        columns: [
          { title: "Supervisor" },
          { title: "Areas of expertise" },
          { title: "Number of theses" }
        ],
        ordering: false,  // Disable automatic sorting
        createdRow: function(row, data, dataIndex) {
          const praci = data[2];
          if (praci <= 4) {
            $(row).addClass('green');
          } else if (praci > 4 && praci <= 10) {
            $(row).addClass('orange');
          } else {
            $(row).addClass('red');
          }
        }
      });
    }