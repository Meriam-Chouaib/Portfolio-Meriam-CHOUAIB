export const items = [
  {
    txt: 'header.projects',
    id: 'projects',
  },
  {
    txt: 'header.blog',
    id: 'blogId',
  },
  {
    txt: 'header.about',
    id: 'aboutId',
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
