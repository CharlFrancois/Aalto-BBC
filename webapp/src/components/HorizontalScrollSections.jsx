const HorizontalScrollSections = () => {

  return (
    <>
      <div className="bg-yellow-10">
        <div className="container sm:px-6 sm:py-3 md:px-8 md:py-6 flex flex-row items-center justify-between border border-yellow-30 border-b">
          <p className="subtitle subtitle-left uppercase tracking-wide mx-auto my-0 ">
            DA AALTO CODE
          </p>
        </div>
      </div>
      <section id='container' className="">
      {/* <HorizontalScroll
      className='absolute'
      reverseScroll = { true }> */}
        <section className="bg-skin-10 h-screen">
          <div className="mx-10 w-screen">
            <div className="flex">
              <div className="w-1/3 ml-10">
                <h3 className="font-serif mb-32">01</h3>
                <p className="mb-8">La magie se produit à l’intersection.</p>
                <p className='mb-8'>Nous comprenons les
                  interactions entre les choses et réalisons les projets du
                  début à la fin en combinant de manière holistique les domaines
                  d'activité du pilotage de chantier, de la gestion
                  administrative, de l'architecture, de la construction, de
                  l’aménagement, du design d'intérieur et du mobilier.</p>
                <p>Le tout dans un seul contrat.</p>
              </div>
              <div className="grid place-self-center w-full m-10">
                <h4 className="m-auto">Pilotage de chantier</h4>
                <img src='ALetter.svg' className="mt-10 mb-10 m-auto" />
                <div className="grid grid-cols-2 justify-items-stretch text-center">
                  <h4 className="ml-10">Architecture</h4>
                  <h4 className="">
                    Design d’interieur
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-brown-light h-screen">
          <div className="mx-10 w-screen">
            <div className="flex">
              <div className="w-1/3 ml-10">
                <h3 className="font-serif mb-32">02</h3>
                <p className="w-380">
                  Notre engagement est total.
                  <br />
                  <br />
                  Un engagement rapide sur un coût ferme et définitif plutôt
                  qu’une estimation du budget. 
                  <br />
                  <br />
                  La parfaite maitrise de nos
                  domaines d’activités nous permet de nous engager dans un
                  contrat de conception-réalisation pour vous assurer la
                  réalisation et la qualité dans les conditions et délais
                  prévus.
                  <br />
                  <br />
                  Nous avons l’obligation de résultat, vous avez la garantie de
                  réaliser votre rêve.
                </p>
              </div>
              <div className="flex flex-col items-center ml-20">
                <div className='flex items-center'>
                  <h4 className="-rotate-45">Prix ferme</h4>
                  <img src='ALetter.svg' className="mt-10 mb-10 m-auto" />
                  <h4 className="rotate-45">Qualité</h4>
                </div>
                <h4 className="">Délai respecté</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-brown-dark h-screen">
            <div className="mx-10 w-screen">
              <div className='flex'>
                <div className="w-1/3 ml-10">
                  <h3 className="font-serif mb-32">03</h3>
                  <p className="">
                    La simplicité &nbsp;
                    <img src='Key.svg' className="inline" />
                    &nbsp; en main.
                    <br />
                    <br />
                    De l’étude à la mise en service, on s’occupe de tout, même du
                    permis de construire et autres complexités administratives,
                    vous n’avez qu’à suivre votre projet grâce à nos outils en
                    ligne.
                    <br />
                    <br />
                    Nous connaissons et utilisons la plupart des outils de gestion
                    de projet immobilier et pouvons vous fournir les données dont
                    vous avez besoin prêtes à être importées.
                    <br />
                    <br />
                    Votre projet une fois réalisé est immédiatement prêt à
                    l’emploi.
                  </p>
                </div>
                <div className="flex ml-20">
                <img src='LLetter.svg' />
                  <div className="my-auto ml-140 text-left whitespace-nowrap">
                    <h4 className="mb-10">
                      Un interlocuteur
                    </h4>
                    <h4 className="mb-10">
                      Un contrat
                    </h4>
                    <h4 className="">
                      Une facture
                    </h4>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className="bg-green-light h-screen">
          <div className="mx-10 w-screen">
            <div className="mb-32">
              <h3 className="font-serif mb-5">04</h3>
              <p className="">Trois facettes.</p>
            </div>
            <div className="grid grid-cols-3 mt-120">
              <div className="flex">
                <div className="facette-creative self-center ml-20">
                  <h4 className="mb-5">Créative</h4>
                  <p className="">
                    Nous avons une passion profonde pour la résolution créative
                    de problèmes pour designer la meilleure experience
                    utilisateur possible.
                  </p>
                </div>
              </div>
              <div className="flex flex-col place-self-center">
              <img src='TLetter.svg' />
              </div>
              <div>
                <div className="flex flex-col gap-120 justify-evenly mt-10">
                  <div className="facette-collaborative mb-10">
                    <h4 className="mb-2">Collaborative</h4>
                    <p className="w-2/3">
                      Nous organisons des ateliers pour appréhender votre
                      vision, culture et besoins spécifiques afin de trouver les
                      meilleures solutions.
                    </p>
                  </div>
                  <div className="facette-responsable">
                    <h4 className="mb-2">Responsable</h4>
                    <p className="w-2/3">
                      Notre démarche est eco-responsable : nous collaboration
                      avec des entreprises locales et usons d’un maximum de
                      matériaux recyclés ou recyclables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-grey-light h-screen">
          <div className="mx-10 w-screen">
            <div className="flex">
              <div className="w-1/3 ml-10">
                <h3 className="font-serif mb-32">05</h3>
                <p className="">
                  C’est la connaissance de votre métier, de ses contraintes et
                  l’interaction parfaite entre nos domaines d’activité qui nous
                  rend unique et nous permet de réaliser tous vos projets du
                  plus simple au plus complexe.
                  <br />
                  <br />
                  Contactez nous.
                </p>
              </div>
              <div className="ml-10">
                <img src='OLetter.svg' className="" />
              </div>
            </div>
          </div>
        </section>
        {/* </HorizontalScroll> */}
      </section>
    </>
  );
};

export default HorizontalScrollSections;
