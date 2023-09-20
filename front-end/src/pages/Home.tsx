import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="p-3 mb-2 text-dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Kana-Eigo - カナ英語</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">
              Web application to challenge users to translate Japanese Katakana loan words back directly to English to
              improve Katakana proficiency and teach users how many English words that is used in plain sight in
              Japanese
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-5 container">
        <div className="row align-items-center">
          <div className="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
            iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo
            neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi
            expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab,
            eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
            consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
            Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
            aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam
            eligendi, placeat qui corporis!
          </div>
          <div className="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
            fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
            iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo
            neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi
            expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima
            nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
            laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod
            quam consequuntur! Commodi minima e
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5  container">
        <div className="row text-center">
          <div className="col">
            <Link to="/kanaquiz">
              <button type="button" className="btn btn-primary">
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
