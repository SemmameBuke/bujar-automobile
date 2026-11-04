import { business } from "./content";

// Null bedeutet ungeklärt, nicht „nicht vorhanden“. Siehe RECHTLICHE-ANGABEN.md.
export const legalDetails = {
  operator: null,
  legalForm: null,
  representative: null,
  register: null,
  vatId: null,
  businessId: null,
  chamber: null,
  profession: null,
  professionalRules: null,
  arbitration: null,
  dataProtectionOfficer: null,
  hosting: null,
};
const pending = (value, label) => value || `[ZU ERGÄNZEN: ${label}]`;
const contact = `${business.name}\n${pending(legalDetails.operator, "vollständiger Name des Inhabers bzw. rechtlicher Unternehmensträger")}\n${business.street}\n${business.city}\nDeutschland\nTelefon: ${business.phone}\nE-Mail: ${business.email}`;
const draft = "Entwurf – noch nicht zur Veröffentlichung freigegeben. Die mit „ZU ERGÄNZEN“ markierten Betriebsangaben müssen bestätigt werden. Das spätere Hosting und die tatsächlichen betrieblichen Abläufe sind vor Veröffentlichung abzugleichen. Stand: 2. November 2026.";

export const legalPages = {
  impressum: {
    title: "Impressum", draft: true, intro: draft,
    sections: [
      ["Angaben gemäß § 5 DDG", `${contact}\nRechtsform / genaue Firmierung: ${pending(legalDetails.legalForm, "Rechtsform und vollständige Firmierung")}\nVertretung: ${pending(legalDetails.representative, "Vertretungsberechtigte bei Gesellschaften; beim Einzelunternehmen Inhaber bestätigen")}`],
      ["Registerangaben", pending(legalDetails.register, "Register, Registergericht und Registernummer, sofern eingetragen; sonst Nichtvorliegen bestätigen und Abschnitt entfernen")],
      ["Steuerliche Identifikationsangaben", `Umsatzsteuer-Identifikationsnummer: ${pending(legalDetails.vatId, "USt-IdNr., sofern vorhanden")}\nWirtschafts-Identifikationsnummer: ${pending(legalDetails.businessId, "W-IdNr., sofern vorhanden")}\nEine persönliche Steuernummer wird hier nicht veröffentlicht.`],
      ["Berufsrechtliche Angaben", `Kammer / gegebenenfalls Aufsichtsbehörde: ${pending(legalDetails.chamber, "Zuständigkeit und erforderliche Angaben prüfen")}\nBerufsbezeichnung und Staat der Verleihung: ${pending(legalDetails.profession, "soweit anwendbar bestätigen")}\nBerufsrechtliche Regelungen und Zugang: ${pending(legalDetails.professionalRules, "anwendbare Regelungen mit Fundstelle, soweit erforderlich")}`],
      ["Verbraucherstreitbeilegung", pending(legalDetails.arbitration, "Teilnahmebereitschaft bzw. Teilnahmepflicht nach § 36 VSBG klären; bei Teilnahme zuständige Schlichtungsstelle mit Anschrift und Website angeben")],
    ],
    links: [
      ["§ 5 Digitale-Dienste-Gesetz", "https://www.gesetze-im-internet.de/ddg/__5.html"],
      ["§ 36 Verbraucherstreitbeilegungsgesetz", "https://www.gesetze-im-internet.de/vsbg/__36.html"],
    ],
  },
  privacy: {
    title: "Datenschutzerklärung", draft: true, intro: draft,
    sections: [
      ["1. Verantwortlicher", `${contact}\nDatenschutzbeauftragter: ${pending(legalDetails.dataProtectionOfficer, "Benennung bzw. Benennungspflicht prüfen; gegebenenfalls Kontaktdaten ergänzen")}`],
      ["2. Geltungsbereich", "Diese Hinweise betreffen den Besuch dieser Website und die angebotenen Kontaktmöglichkeiten. Datenverarbeitungen im Werkstattbetrieb, etwa bei Instandsetzungsaufträgen, Rechnungen oder einer Videoüberwachung, sind bei Bedarf in gesonderten Informationen zu erläutern."],
      ["3. Hosting und technische Daten", `${pending(legalDetails.hosting, "tatsächlicher Hostinganbieter mit Anschrift, Infrastruktur, Empfängern, Protokolldaten, Speicherfristen und Vertragsgrundlage; gegebenenfalls Drittlandübermittlungen samt Garantien")}\nBeim Abruf wird Ihre IP-Adresse für die Auslieferung der Website an den Server übermittelt. Welche weiteren Daten protokolliert werden, ist anhand des tatsächlichen Hostings zu ergänzen. Die notwendige Bereitstellung und Absicherung kann auf Art. 6 Abs. 1 lit. f DSGVO beruhen; das berechtigte Interesse liegt im sicheren und funktionsfähigen Internetauftritt. Dieser Abschnitt muss vor Veröffentlichung konkretisiert werden.`],
      ["4. Lokal bereitgestellte Medien", "Schriftdateien, Bilder und Videos werden zusammen mit der Website ausgeliefert. Es werden hierfür keine externen Schrift-, Video- oder Bilddienste eingebunden. Beim Abruf fallen die für die Auslieferung erforderlichen technischen Daten beim Hostinganbieter an; hierzu gilt Abschnitt 3."],
      ["5. Cookies und Reichweitenmessung", "Der eigene Website-Code setzt keine Analyse- oder Marketing-Cookies ein und enthält keine Reichweitenmessung. Formulareingaben werden weder in Cookies noch in localStorage oder sessionStorage gespeichert. [ZU ERGÄNZEN: Verhalten des endgültigen Hostings und späterer Zusatzdienste prüfen. Werden nicht notwendige Speicherzugriffe oder Tracking ergänzt, sind erforderliche Einwilligungen nach § 25 TDDDG und DSGVO vorab technisch umzusetzen und diese Hinweise anzupassen.]"],
      ["6. Vorbereitung einer Kontaktanfrage", "Das Formular verwendet Name, Telefonnummer und gewünschte Leistung ausschließlich im Browser, um einen Nachrichtentext vorzubereiten. „Anfrage vorbereiten“ versendet keine Nachricht und übermittelt die Formularwerte nicht an einen Formularserver. Der eigene Website-Code hält die Angaben nur im Arbeitsspeicher der geöffneten Seite. Browserfunktionen wie automatisches Ausfüllen oder Wiederherstellen werden durch Ihren Browser gesteuert. Sie können uns stattdessen direkt telefonisch oder per E-Mail kontaktieren."],
      ["7. Anfragen per Telefon und E-Mail", "Bei einer Kontaktaufnahme verarbeiten wir Ihre Kontakt- und Inhaltsdaten, um Ihr Anliegen zu beantworten und gegebenenfalls einen Termin oder Auftrag abzustimmen. Bei vertragsbezogenen Anfragen ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage; sonst Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Bearbeitung eingehender Kommunikation. Angaben sind freiwillig; ohne ausreichende Kontakt- und Sachangaben lässt sich eine Anfrage möglicherweise nicht bearbeiten. [ZU ERGÄNZEN: tatsächlich eingesetzte E-Mail- und Telekommunikationsanbieter, deren Rolle und gegebenenfalls Drittlandübermittlungen.]"],
      ["8. Freiwilliger Kontakt über WhatsApp", "WhatsApp ist eine zusätzliche Kontaktmöglichkeit. Sie können uns alternativ telefonisch oder per E-Mail erreichen. Erst bei „In WhatsApp öffnen“ wird ein externer WhatsApp-Link aufgerufen. Der vorbereitete Text enthält Ihren Namen, Ihre Telefonnummer und Ihr Anliegen. Diese Angaben werden bereits beim Öffnen als Bestandteil des Links an WhatsApp übergeben, nicht erst beim anschließenden Absenden an uns. Verwenden Sie diesen Weg bitte nicht für besonders sensible Informationen.\nFür den Dienst im Europäischen Raum ist WhatsApp Ireland Limited zuständig. WhatsApp verarbeitet Verbindungs- und Nutzungsdaten nach seinen eigenen Datenschutzhinweisen; dabei können Daten außerhalb des Europäischen Wirtschaftsraums verarbeitet werden. Unsere Bearbeitung Ihrer gesendeten Nachricht richtet sich nach den Zwecken und Rechtsgrundlagen in Abschnitt 7. [ZU ERGÄNZEN: eingesetzte WhatsApp-/Business-Konfiguration, Anbieteranschrift, etwaige API-Dienstleister und anwendbare Drittlandgarantien konkret prüfen.]"],
      ["9. Karten, Bewertungen und externe Links", "Es ist keine Google-Karte eingebettet. Die Standortanzeige wird lokal dargestellt. Erst wenn Sie einen Karten- oder Routenlink öffnen, wird Google Maps aufgerufen. Google erhält dann die zum Verbindungsaufbau erforderlichen Daten, insbesondere Ihre IP-Adresse, und verarbeitet gegebenenfalls weitere Daten nach eigenen Datenschutzhinweisen. Entsprechendes gilt für die Links zu Google-Rezensionen. Die angezeigten Bewertungstexte sind statisch eingebunden; es gibt kein externes Bewertungswidget und keine extern geladenen Profilbilder. Der Link zu BA Performance führt ebenfalls zu einer eigenständigen Website mit eigenen Datenschutzhinweisen."],
      ["10. Empfänger und internationale Übermittlungen", "Tatsächlich eingegangene Anfragen werden von den zuständigen Personen im Betrieb und erforderlichenfalls von eingesetzten technischen Dienstleistern verarbeitet. Eine Weitergabe erfolgt nur bei bestehender Rechtsgrundlage. Soweit Auftragsverarbeitung vorliegt, ist ein Vertrag nach Art. 28 DSGVO erforderlich. [ZU ERGÄNZEN: tatsächliche Dienstleister und Empfängerkategorien erfassen. Für Übermittlungen außerhalb des EWR gegebenenfalls Angemessenheitsbeschluss oder geeignete Garantien nach Art. 44 ff. DSGVO konkret benennen und erläutern, wie eine Kopie erhältlich ist.]"],
      ["11. Speicherdauer", "Formularwerte verbleiben im eigenen Website-Code nur während der Nutzung der geöffneten Seite. Versendete Anfragen werden so lange verarbeitet, wie es für deren Bearbeitung erforderlich ist. Gesetzliche Aufbewahrungspflichten und die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen können eine weitere Aufbewahrung erforderlich machen; die Nutzung wird dann auf diesen Zweck beschränkt. Danach werden die Daten gelöscht. [ZU ERGÄNZEN: konkrete Löschfristen und Abläufe für Anfragen, Nachrichten, Sicherungen und Hosting-Protokolle mit dem Betrieb abstimmen.]"],
      ["12. Ihre Rechte", "Nach Maßgabe der gesetzlichen Voraussetzungen haben Sie Rechte auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Soweit eine Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit für die Zukunft widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt. Zur Ausübung Ihrer Rechte können Sie uns über die oben genannten Kontaktdaten erreichen."],
      ["13. Widerspruchsrecht", "Bei einer Verarbeitung nach Art. 6 Abs. 1 lit. f DSGVO können Sie aus Gründen Ihrer besonderen Situation gemäß Art. 21 DSGVO widersprechen. Wir verarbeiten die Daten dann nicht weiter, außer es bestehen zwingende schutzwürdige Gründe, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient Rechtsansprüchen. Gegen eine Verarbeitung für Direktwerbung können Sie jederzeit ohne besondere Begründung widersprechen."],
      ["14. Beschwerderecht", "Sie können sich gemäß Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere im Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des vermuteten Verstoßes. Für einen in Nordrhein-Westfalen ansässigen Betrieb kommt insbesondere die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen in Betracht. Die aktuellen Kontakt- und Beschwerdewege sind unten verlinkt."],
      ["15. Automatisierte Entscheidungen und Änderungen", "Die Website trifft keine automatisierten Entscheidungen mit rechtlicher oder vergleichbar erheblicher Wirkung und führt kein Profiling durch. Ändern sich Funktionen, Dienstleister oder betriebliche Abläufe, sind diese Datenschutzhinweise entsprechend zu aktualisieren."],
    ],
    links: [
      ["LDI Nordrhein-Westfalen – Kontakt und Beschwerden", "https://www.ldi.nrw.de/kontakt"],
      ["WhatsApp – Datenschutzhinweise", "https://www.whatsapp.com/legal/privacy-policy-eea"],
      ["Google – Datenschutzhinweise", "https://policies.google.com/privacy?hl=de"],
    ],
  },
  terms: {
    title: "Hinweise zur Terminanfrage",
    intro: "Sie können eine Nachricht vorbereiten und selbst per E-Mail oder WhatsApp versenden. Einen Termin stimmen Sie persönlich mit Bujar Automobile ab.",
    sections: [
      ["Keine automatische Buchung", "Eine Anfrage stellt keine automatische Terminbestätigung dar. Bitte warten Sie auf eine persönliche Rückmeldung des Betriebs."],
      ["Arbeiten und Kosten", "Arbeiten und Kosten werden im konkreten Auftrag mit dem Betrieb abgestimmt. Diese Informationsseite enthält keine Allgemeinen Geschäftsbedingungen und vereinbart keine Stornoentgelte, Haftungsausschlüsse oder zusätzlichen Garantien."],
      ["Kontakt", contact],
    ],
  },
};
