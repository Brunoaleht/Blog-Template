import { GetStaticProps } from 'next';
import Head from 'next/head';
import { defaultLoadPostsVariables, loadPost } from '../api/loadPost';
import { PostsTemplate, PostsTemplateProps } from '../templates/PostsTemplate';

export default function Index({ setting, posts, variable }: PostsTemplateProps) {
  return (
    <>
      <Head>
        <title>{setting.settingData.attributes.blogName}</title>
        <meta name="description" content={setting.settingData.attributes.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} setting={setting} variable={variable} />
    </>
  );
}
export const getStaticProps: GetStaticProps<PostsTemplateProps> = async () => {
  let data = null;

  try {
    data = await loadPost();
  } catch (e) {
    data = null;
  }
  if (!data || !data.posts.postData || !data.posts.postData.length) {
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
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
