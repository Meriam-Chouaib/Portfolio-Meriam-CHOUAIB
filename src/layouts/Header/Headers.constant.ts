export const items = [
  {
    txt: 'header.projects',
    id: 'projectsId',
  },
  {
    txt: 'header.blog',
    id: 'blogId',
  },

  {
    txt: 'header.contact',
    id: 'contactId',
  },
]

export const itemsDrawer = () => {
  return items.map((item) => ({
    ...item,
  }))
}
