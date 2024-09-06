import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="space-y-9 py-6">
      <h1 className={title()}>
        Distributor ekskluziv i lubrifikantëve të markës GALP
      </h1>
      <p className="text-base lg:text-lg xl:text-xl tracking-wide">
        <p className={title({ size: "base", color: "cyan" })}>AÇI SH.A</p> është themeluar në vitin 2003, si një kompani e shitjes dhe shpërndarjes së vajrave lubrifikantë. Ekipi themelues ishte i specializuar në tregun produkteve te naftes me një ekperiencë të gjatë në kompani të tjera.
        Që në fillimet e saj, kompania jonë ishte e përqendruar në shpërndarjen e produkteve <p className={title({ size: "base", color: "yellow" })}>PETROGAL</p> nën emrin e markës Galp, duke pasur ekskluzivitet në territorin shqiptar për këto produkte.
        Ne gjithmonë përpiqemi që të ruajmë një bashkëpunim të mirë me klientët tanë si edhe të ofrojmë një shërbim të shkëlqyer dhe me vlerë të kënaqshme.
        Cilësia e produkteve që ofron kompania jonë është e garantuar nga <p className={title({ size: "base", color: "yellow" })}>GALP</p> përmes programit të partneritetit midis dy kompanive.
      </p>
      <p className="text-base lg:text-lg xl:text-xl tracking-wide pb-8">
        Duke pasur një treg në zhvillim, <p className={title({ size: "base", color: "cyan" })}>AÇI SH.A</p> ofron jo vetëm një çmim të mirë në krahasim me cilësinë, por gjithashtu e garanton cilësinë e produktit në bashkëpunim me furnizuesin e saj.
        Në vitin 2017, kompania jonë mori ekskluzivitetin e plotë për shpërndarjen e produkteve <p className={title({ size: "base", color: "yellow" })}>GALP</p> në rajonit të Ballkanit.
        Në vitin 2018, ne filluam shpërndarjen e markës sonë të baterive automobilistike, Laser.
        Kompania ofron bateri pa mirëmbajtje (CMF, EFB, AGM), të prodhuara në Kore, nga fabrika Hyundai Sungwoo.
        Me synim rritjen e shitjeve, kompania ruan akoma të njëjtin reputacion të shkëlqyer dhe përpiqet të krijojë mënyra inovative për konsumatorët për t’i informuar dhe ndihmuar ata, pa ndikuar ndërkohë në vendim-marrjen e tyre.
        Aplikimi i strategjisë sonë të punës dhe cilësia që ofrojmë, ka bërë të mundur që kompania jonë të jetë kompani ndër më të mirat në fushën e shitjes dhe shpërndarjes së vajrave lubrifikantë në Shqipëri dhe më gjerë.
      </p>
      <h2 className={title({size: "xs"})}>
        Të specializuar për lubrifikantë dhe bateri të teknologjisë së lartë,
        duke siguruar performancën më të mirë për automjetin tuaj.
      </h2>
    </section>
  );
}
