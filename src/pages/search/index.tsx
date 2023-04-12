import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { defaultLoadPostsVariables, loadPost } from '../../api/loadPost';
import { PostsTemplate, PostsTemplateProps } from '../../templates/PostsTemplate';

export default function SearchPage({ posts, setting, variable }: PostsTemplateProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.settingData.attributes.blogName}
        </title>
        <meta name="description" content={setting.settingData.attributes.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} setting={setting} variable={variable} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PostsTemplateProps> = async (ctx) => {
  let data = null;
  const query = ctx.query.q || '';

  if (!query) {
    return {
      notFound: true,
    };
  }
  const variables = { postSearch: query as string };

  try {
    data = await loadPost(variables);
    console.log(data.posts);
  } catch (e) {
    data = null;
  }
  if (!data || !data.posts.postData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variable: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
  };
};
