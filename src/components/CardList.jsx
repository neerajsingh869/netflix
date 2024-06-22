/* eslint-disable react/prop-types */

import Card from "./Card";

const CardList = ({title, data}) => {
  console.log(data);

  return (
    <div className="pl-12">
      <h2 className="pt-12 pb-4 text-xl font-bold text-white">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {
            data.map(d => <Card key={d.id} posterPath={d.poster_path} title={d.original_title} />)
          }
        </div>
      </div>
    </div>
  )
}

export default CardList