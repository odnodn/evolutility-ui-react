module.exports = {
	fields:[
      {
          id: 'title', attribute: 'title', type: 'text', label: 'Title', required: true, 
          maxLength: 255,
          width: 100, inMany: true
      },
      {
          id: 'authors', attribute: 'authors', type: 'text', width: 62, inMany: true,
          label: 'Authors'
      },
      {
          id: 'genre', attribute: 'genre', type: 'lov', label: 'Genre', width: 38, inMany: true,
          list: [
            {id: 1, text: 'Adventure'},
            {id: 2, text: 'Fairy tale'},
            {id: 3, text: 'Erotic'},
            {id: 4, text: 'Fantastic'},
            {id: 5, text: 'Heroic Fantasy'},
            {id: 6, text: 'Historic'},
            {id: 7, text: 'Humor'},
            {id: 8, text: 'One of a kind'},
            {id: 9, text: 'Youth'},
            {id: 10, text: 'Thriller'},
            {id: 11, text: 'Science-fiction'},
            {id: 12, text: 'Super Heros'},
            {id: 13, text: 'Western'} 
          ],
          lovtable: 'comics_genre'
      },
      {
          id: 'serie_nb', attribute: 'serie_nb', type: 'integer', width: 15, inMany: false,
          label: 'Albums', inCharts:false 
      },
      {
          id: 'have_nb', attribute: 'have_nb', type: 'integer', width: 15, inMany: false,
          label: 'Owned', inCharts:false 
      },
      {
          id: 'have', attribute: 'have', type: 'text', width: 32, inMany: false,
          label: 'Have' 
      },
      {
          id: 'complete', attribute: 'complete', type: 'boolean', width: 19, inMany: false,
          label: 'Complete', labelFalse:'Incomplete', labelTrue:'Complete'
      },
      {
          id: 'finished', attribute: 'finished', type: 'boolean', width: 19, inMany: false,
          label: 'Finished', labelTrue:'Finished', labelFalse:'Not finished', css:'cBlue'
      },

      {
          id: 'language', attribute: 'language', type: 'lov', label: 'Language', width: 30, inMany: true,
          list: [
            {id: 2, text: 'French', icon:'flag_fr.gif'},
            {id: 1, text: 'American', icon:'flag_us.gif'}
          ],
          lovtable: 'comics_language'
      },/*
      {
          id:'amazon', label:'Amazon', type:'formula', width:32, css:'evol-ellipsis',
          formula:function(m){
              if(m){
                  var urlData=m.get('title')+' '+(m.get('authors')||''),
                  link=m.get('language')=='FR' ?
                      'http://www.amazon.fr/s/ref=sr_nr_n_1?keywords='
                      :'http://www.amazon.com/s/ref=nb_sb_noss?field-keywords=';
                  return '<a target="a" href="'+link+encodeURI(urlData)+'">'+_.escape(urlData)+'</a>';
              }
              return 'N/A';
          }
      },
      {
          id:'bdfugue', label:'BDFugue', type:'formula', width:38, css:'evol-ellipsis',
          formula:function(m){
              if(m){
                  var urlData=m.get('title')+' '+(m.get('authors')||''),
                  link='http://www.bdfugue.com/catalogsearch/result/?q=';
                  return '<a target="a" href="'+link+encodeURI(urlData)+'">'+_.escape(urlData)+'</a>';
              }
              return 'N/A';
          }
      },*/
      {
          id: 'notes', attribute: 'notes', type: 'textmultiline', label: 'Notes', maxLength: 1000,
          width: 100, height: 7, inMany: false
      },
      {
          id: 'pix', attribute: 'pix', type: 'image', width: 100, inMany: true,
          label: 'Album Cover', labelList:'Cover', labelBrowse:'', labelCards:''
      }
  ]

}

