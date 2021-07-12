module.exports = {
  client: {
    service: {
      name: 'client',
      url: 'https://mazipan-gql-pokeapi.herokuapp.com/graphql',
      // optional headers
      headers: {
        // authorization: 'Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE1OTUxNjQ0MjgsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrY3FlbXVtcjB3ZHMwMXhzOG5nZWE1NXAvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjBhZjU1NGUtYjNiZi00MDVkLWE1NjgtNTIwNjBjZGY0YWFkIiwianRpIjoiY2tjdDNwcWd2MW90dzAxd2oza242OGx4OCJ9.LWZZ50aEtpia_hcyoQHcnneMDNZuNgYGLmJKSpwVECzPsGBtMwxCqYpYxCJql0Me1H3TyBtk8sMJH3Vkx5l3lAec9Xkuy4tRLbUcuYfkO5CVjEPyfbrKAdVkwVHDT0W__qvnJByullPjU_g-47zCXI3e2vfTyH7aI0EJp9KtL0z6Nhnc9jV_XbclgPdrRoFIUJZuYtQkiokq5IF9pu4_DYp0HdjiRbC3WumY1BuhQONFpt9i3kS9QbejjCr57T3CyHC9khXVOcLl0Qqt5tqG-WN3h1hufd4NOlH8Fb-rurV__zuUYL4GcGkukQTz-7iqOtw5F8V0cfgSBKBYB64ja8UaVNBzEX1gw1UdZXxPOjIs5junxdWg5vM2WpfjJiUIKNljXfWZhcuAzGTGHo7QxqRk7lxoMzjyOs9eWvjTLnNiqwwgrwybVeoI8FnbzslQ2YjXQJMKJ-5d7zXDQ56LL99vxHd4T6bw0QMqjNtFWgHt8SjHIgLBrM7_r4dqHUfnX0NEa9xjavzrah6RqS-Z1lekWlwDbkGhZ26gzOlG106oxEXRKtpWbLvnJsXTZq2f6OWoiQvQKcG5_4-EQfP8q4SbMjDpowVdim0d9PmcT5u0JPkelnvNFNswlf-BtH0xxvSWxqvpnKssKdMIq5z6k4MeYsBGAPJCjedBdo5oFoU'
      },
      // optional disable SSL validation check
      skipSSLValidation: true
    },
    // tagName: 'omitGqlTagsTheyAreUnderGraphqlCodeGeneratorControl',
  },
};
