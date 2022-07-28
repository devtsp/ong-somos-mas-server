'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Entries',
      [
        {
          name: 'Quercus havardii Rydb. var. tuckeri S.L. Welsh',
          content:
            'tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam',
          categoryId: 1,
          image: 'https://i.pravatar.cc/300',
          type: 'Blue-tongued lizard',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Aliciella penstemonoides (M.E. Jones) J.M. Porter',
          content:
            'diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in',
          categoryId: 2,
          image: 'https://i.pravatar.cc/300',
          type: 'Anteater, australian spiny',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Eriogonum heermannii Durand & Hilg. var. clokeyi Reveal',
          content:
            'a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae',
          categoryId: 4,
          image: 'https://i.pravatar.cc/300',
          type: 'Baboon, gelada',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Melicope feddei (Levl.) T.G. Hartley & B.C. Stone',
          content:
            'lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi',
          categoryId: 1,
          image: 'https://i.pravatar.cc/300',
          type: 'Bird, secretary',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Rhizocarpon cumulatum J.W. Thomson',
          content:
            'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum',
          categoryId: 1,
          image: 'https://i.pravatar.cc/300',
          type: 'Dove, emerald-spotted wood',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Thelypteris quelpaertensis (Christ) Ching',
          content:
            'sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla',
          categoryId: 2,
          image: 'https://i.pravatar.cc/300',
          type: 'Ground legaan',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Aristida schiedeana Trin. & Rupr.',
          content:
            'luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum',
          categoryId: 1,
          image: 'https://i.pravatar.cc/300',
          type: 'African pied wagtail',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Carex baileyi Britton',
          content:
            'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend',
          categoryId: 3,
          image: 'https://i.pravatar.cc/300',
          type: 'Sally lightfoot crab',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Oxytropis deflexa (Pall.) DC. var. sericea Torr. & A. Gray',
          content:
            'varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat',
          categoryId: 2,
          image: 'https://i.pravatar.cc/300',
          type: 'Eagle, golden',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
        {
          name: 'Leptogium lichenoides (L.) Zahlbr.',
          content:
            'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus',
          categoryId: 4,
          image: 'https://i.pravatar.cc/300',
          type: 'Mandras tree shrew',
          createdAt: '2022-07-28 00:00:00',
          updatedAt: '2022-07-28 00:00:00',
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('entries');
  },
};
