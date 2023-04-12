import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { defaultLoadPostsVariables, loadPost } from '../../api/loadPost';
import { PostsTemplate, PostsTemplateProps } from '../../templates/PostsTemplate';

export default function TagPage({ posts, setting, variable }: PostsTemplateProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading</h1>;
  }
  const tagName = posts.postData[0].attributes.tags.tagsData.filter(
    (tag) => tag.attributes.slug === router.query.slug,
  )[0].attributes.displayName;
  return (
    <>
      <Head>
        <title>
          Tag: {tagName} - {setting.settingData.attributes.blogName}
        </title>
        <meta name="description" content={setting.settingData.attributes.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} setting={setting} variable={variable} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async (ctx) => {
  let data = null;
  const variables = { tagsSlug: { eq: ctx.params.slug as string } };

  try {
    data = await loadPost(variables);
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
        ...variables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
