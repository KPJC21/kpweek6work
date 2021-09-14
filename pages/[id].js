import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article class="card col-6">
        <div class="card-body">
          <h5 class="card-title">{itemData.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
          <p class="card-text">{itemData.birthdate}</p>
          <a href={'mailto:' + itemData.email} class="card-link">{itemData.email}</a>
          <h4 class="card col-7">{itemData.person2.name}</h4>
          <h5 class="card-title">{itemData.person2.phone}</h5>
          <p class="card-text">{itemData.person2.birthdate}</p>
          <a href={'mailto:' + itemData.person2.email} class="card-link">{itemData.person2.email}</a>
          <p class="card-text">A friend</p>
        </div>
      </article>
    </Layout>
  );
}