import { GetServerSidePropsContext, NextPage } from 'next';
import Header from '../../src/components/navigations/header/Header';

type Person = {
  id: number;
};

const Persons: NextPage<Person> = ({ id }) => {
  return (
    <div>
      Person id: {id}
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context.query);
  const { id } = context.query;
  return {
    props: {
      id: id,
    },
  };
}

export default Persons;
