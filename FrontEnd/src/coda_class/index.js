import React from "react";

const MainClass = () => {
  return (
    <main className="mt-12">
      <section className="mx-auto  p-5 shadow-lg ">
        <h1 className="text-center text-3xl font-semibold mb-4">
          Bienvenue sur Coda-Class !
        </h1>
        <p className="mb-4 text-center">
          Coda-Class est votre espace dédié pour explorer le monde du
          développement, que vous soyez débutant ou en quête de
          perfectionnement.
          <br />
          Plongez dans un univers où chaque ligne de code devient une compétence
          et chaque projet un pas de plus vers l'expertise.
        </p>

        <div className="ml-5">
          <h2 className="font-semibold text-xl mb-2">
            Ce que vous trouverez sur Coda-Class :
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Des Cours Intuitifs : Suivez des parcours guidés et structurés,
              conçus pour vous faire progresser à chaque étape.
            </li>
            <li>
              Des Exercices Pratiques : Mettez vos connaissances en action et
              améliorez vos compétences à travers des exercices stimulants.
            </li>
            <li>
              Une Communauté Active : Partagez vos expériences, obtenez des
              conseils, et collaborez avec d'autres passionnés du développement.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex flex-row space-x-4 rounded-full">


          <video></video>
          <video></video>
          <video></video>
        </div>
      </section>
    </main>
  );
};

export default MainClass;
