import {gql, GraphQLClient} from 'graphql-request';

const datoToken = process.env.DATOCMS_TOKEN
const datoEndpoint = process.env.DATOCMS_ENDPOINT

//get data from learning resources 
export const getLearningResources = async () => {
    const res = new GraphQLClient(datoEndpoint, {
        headers: {
            Authorization: datoToken
        }
    })

    const query = gql`
        {
            allLearningResources {
                id
                title
                slug
                topicArea
                description
                gradeLevel
                language
                leader
                _status
                _createdAt
              }
        }
    `

    const resJson = await res.request(query);
    return resJson.allLearningResources;
}

export const getExhibition = async() => {
    const res = new GraphQLClient(datoEndpoint, {
        headers: {
            Authorization: datoToken
        }
    })

    const query = gql`
        {
            exhibition {
                closeDate
                ageGroups
                description
                exhibitionType
                id
                subtitle
                slug
                title
                openDate
                openStatus
                preview
                ticketInformationLink
                ticketed
                heroImage {
                  alt
                  author
                  copyright
                  id
                  height
                  title
                  url
                  width
                  tags
                }
                secondaryImage {
                  author
                  alt
                  basename
                  id
                  height
                  url
                  width
                  video {
                    mp4Url
                    duration
                    thumbnailUrl
                    streamingUrl
                  }
                  title
                }
                updatedAt
              }
        }
    `
    const resJson = await res.request(query);
    return resJson.exhibition;
}

export const getPressReleases = async() => {
    const res = new GraphQLClient(datoEndpoint, {
        headers: {
            Authorization: datoToken
        }
    })

    const query = gql`
        {
            allPressReleases {
                title
                author
                date
                slug
                subtitle
                pressReleaseType
            }
        }
    `
    const resJson = await res.request(query)
    return resJson.allPressReleases;
}

export const getPeople = async() => {
    const res = new GraphQLClient(datoEndpoint,
        {
            headers: {
                Authorization: datoToken
            }
        }
    )

    const query = gql`
    {
        allPeople {
          id
          firstName
          lastName
          jobTitle
          email
          slug
          shortBio
          headerImage {
            url
            title
            alt
            author
          }
        }
      }
    `
    const resJson = res.request(query)
    return resJson.allPeople;
}