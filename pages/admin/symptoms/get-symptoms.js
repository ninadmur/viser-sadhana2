import axios from 'axios';
import Sidebar from '../../../components/admin/admin-sidebar';
const GetSymptoms = ({ data }) => {
  return (
    <div className="w-3/4">
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>By User</th>
            <th>Added at</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((x, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{x.name}</td>
                  <td>{x.created_by}</td>
                  <td>{x.created_at}</td>
                  <td>
                    <span className="text-[#0066FF]">options</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default GetSymptoms;

export async function getServerSideProps(context) {
  const res = await axios.get('http://127.0.0.1:8000/app/symptoms');
  const data = await res.data;

  //   console.log(data);
  return { props: { data } };
}
