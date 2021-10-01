const bioData = {
  name: 'Launch',
  type: 'node',
  request: 'Thapa Techniqal',
};

const jsondata = JSON.stringify(bioData);

const obData = JSON.parse(jsondata);

export default function Test() {
  return (
    <>
      <h2>Convert Object to Json</h2>
      {jsondata}

      <h2>Json to Object </h2>
    </>
  );
}

console.log(obData);
