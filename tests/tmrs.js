var tmrs = [
  {'Step': 'final',
 'results': [{'TMR': {'HUMAN-1': {'HEIGHT': 0.8,
                                  'concept': 'HUMAN',
                                  'from-sense': 'JIM-N1',
                                  'lex-source': 'NER',
                                  'token': 'Jim',
                                  'word-ind': 0}},
              'concept_counts': {'HUMAN': {'count': 1,
                                           'word-ind': [0]}},
              'words': {'0': 'JIM-N1', '2': 'TALL-ADJ2'}}],
 'sent-num': 1,
 'sentence': 'Jim is tall.',
 'timestamp': '2016-Mar-25 12:37:21'},
{'Step': 'final',
 'results': [{'TMR': {'DOG-2': {'BELONGS-TO': {'value': 'HUMAN-2'},
                                'SIZE': 0.7,
                                'concept': 'DOG',
                                'from-sense': 'DOG-N1',
                                'token': 'dog',
                                'word-ind': 2},
                      'HUMAN-2': {'POSSESSES': 'DOG-2',
                                  'concept': 'HUMAN',
                                  'from-sense': 'JIM-N1',
                                  'lex-source': 'NER',
                                  'token': 'Jim',
                                  'word-ind': 0}},
              'concept_counts': {'DOG': {'count': 2, 'word-ind': [2]},
                                 'HUMAN': {'count': 2,
                                           'word-ind': [0]}},
              'words': {'0': 'JIM-N1', '2': 'DOG-N1', '4': 'LARGE-ADJ1'}}],
 'sent-num': 2,
 'sentence': "Jim's dog is large.",
 'timestamp': '2016-Mar-25 12:37:21'},
 {'Step': 'final',
 'results': [{'TMR': {'HUMAN-3': {'HEIGHT': 1.0,
                                  'concept': 'HUMAN',
                                  'from-sense': 'JIM-N1',
                                  'lex-source': 'NER',
                                  'token': 'Jim',
                                  'word-ind': 0}},
              'concept_counts': {'HUMAN': {'count': 3,
                                           'word-ind': [0]}},
              'words': {'0': 'JIM-N1', '2': 'VERY-ADV1', '3': 'TALL-ADJ2'}}],
 'sent-num': 3,
 'sentence': 'Jim is very tall.',
 'timestamp': '2016-Mar-25 12:37:21'},
 {'Step': 'final',
 'results': [{'TMR': {'ANIMAL-4': {'CONSCIOUS': 'YES',
                                   'concept': 'ANIMAL',
                                   'from-sense': 'HE-N1',
                                   'token': 'He',
                                   'word-ind': 0}},
              'concept_counts': {'ANIMAL': {'count': 4,
                                            'word-ind': [0]}},
              'words': {'0': 'HE-N1', '2': 'CONSCIOUS-ADJ1'}}],
 'sent-num': 4,
 'sentence': 'He is conscious.',
 'timestamp': '2016-Mar-25 12:37:21'},
 {'Step': 'final',
 'results': [{'TMR': {'BOOK-5': {'THEME-OF': 'READ-5',
                                 'concept': 'BOOK',
                                 'from-sense': 'BOOK-N1',
                                 'token': 'book',
                                 'word-ind': 4},
                      'HUMAN-5': {'AGENT-OF': 'READ-5',
                                  'concept': 'HUMAN',
                                  'from-sense': 'JANE-N1',
                                  'lex-source': 'NER',
                                  'token': 'Jane',
                                  'word-ind': 0},
                      'READ-5': {'AGENT': {'value': 'HUMAN-5'},
                                 'PHASE': 'CONTINUE',
                                 'THEME': {'value': 'BOOK-5',
                                           'facet-type': 'DEFAULT-onto'},
                                 'TIME': ['FIND-ANCHOR-TIME'],
                                 'concept': 'READ',
                                 'from-sense': 'READ-V1',
                                 'syn-roles': ['SUBJECT',
                                               'DIRECTOBJECT'],
                                 'token': 'reading',
                                 'word-ind': 2}},
              'concept_counts': {'BOOK': {'count': 5, 'word-ind': [4]},
                                 'HUMAN': {'count': 5,
                                           'word-ind': [0]},
                                 'READ': {'count': 5, 'word-ind': [2]}},
              'words': {'0': 'JANE-N1', '2': 'READ-V1', '4': 'BOOK-N1'}}],
 'sent-num': 5,
 'sentence': 'Jane is reading a book.',
 'timestamp': '2016-Mar-25 12:37:21'},
 {'Step': 'final',
 'results': [{'TMR': {'BOOK-7': {'THEME-OF': 'READ-7',
                                 'concept': 'BOOK',
                                 'from-sense': 'BOOK-N1',
                                 'token': 'book',
                                 'word-ind': 3},
                      'HUMAN-7': {'AGENT-OF': 'READ-7',
                                  'concept': 'HUMAN',
                                  'from-sense': 'JANE-N1',
                                  'lex-source': 'NER',
                                  'token': 'Jane',
                                  'word-ind': 0},
                      'HUMAN-8': {'BENEFICIARY-OF': 'READ-7',
                                  'concept': 'HUMAN',
                                  'from-sense': 'MARY-N1',
                                  'lex-source': 'NER',
                                  'token': 'Mary',
                                  'word-ind': 7},
                      'READ-7': {'AGENT': {'value': 'HUMAN-7'},
                                 'BENEFICIARY': {'value': 'HUMAN-8'},
                                 'THEME': {'value': 'BOOK-7',
                                           'facet-type': 'DEFAULT-onto'},
                                 'TIME': ['<', 'FIND-ANCHOR-TIME'],
                                 'concept': 'READ',
                                 'in-tree': 'events',
                                 'from-sense': 'READ-V2',
                                 'syn-roles': ['SUBJECT',
                                               'DIRECTOBJECT',
                                               'INDIRECTOBJECT'],
                                 'token': 'read',
                                 'word-ind': 1}},
              'concept_counts': {'BOOK': {'count': 7, 'word-ind': [3]},
                                 'HUMAN': {'count': 8,
                                           'word-ind': [0, 7]},
                                 'READ': {'count': 7, 'word-ind': [1]}},
              'words': {'0': 'JANE-N1',
                        '1': 'READ-V2',
                        '3': 'BOOK-N1',
                        '7': 'MARY-N1'}}],
 'sent-num': 7,
 'sentence': 'Jane read a book about dogs to Mary.',
 'timestamp': '2016-Mar-25 12:37:21'},
 {'Step': 'final',
 'results': [{'TMR': {'DOG-9': {'AGENT-OF': 'PAY-ATTENTION-9',
                                'SIZE': 0.9,
                                'concept': 'DOG',
                                'from-sense': 'DOG-N1',
                                'token': 'dog',
                                'word-ind': 3},
                      'HORSE-9': {'COLOR': 'BROWN',
                                  'THEME-OF': 'PAY-ATTENTION-9',
                                  'concept': 'HORSE',
                                  'from-sense': 'HORSE-N1',
                                  'token': 'horse',
                                  'word-ind': 7},
                      'PAY-ATTENTION-9': {'AGENT': {'value': 'DOG-9'},
                                          'THEME': {'value': 'HORSE-9'},
                                          'concept': 'PAY-ATTENTION',
                                          'in-tree': 'events',
                                          'from-sense': 'FOLLOW-V11',
                                          'syn-roles': ['SUBJECT',
                                                        'DIRECTOBJECT'],
                                          'token': 'follows',
                                          'word-ind': 4}},
              'concept_counts': {'DOG': {'count': 9, 'word-ind': [3]},
                                 'HORSE': {'count': 9,
                                           'word-ind': [7]},
                                 'PAY-ATTENTION': {'count': 9,
                                                   'word-ind': [4]}},
              'words': {'1': 'VERY-ADV1',
                        '2': 'LARGE-ADJ1',
                        '3': 'DOG-N1',
                        '4': 'FOLLOW-V11',
                        '6': 'BROWN-ADJ1',
                        '7': 'HORSE-N1'}},
             {'TMR': {'DOG-9': {'AGENT-OF': 'PAY-ATTENTION-9',
                                'SIZE': 0.9,
                                'concept': 'DOG',
                                'from-sense': 'DOG-N1',
                                'token': 'dog',
                                'word-ind': 3},
                      'HORSE-GYM-9': {'COLOR': 'BROWN',
                                      'THEME-OF': 'PAY-ATTENTION-9',
                                      'concept': 'HORSE-GYM',
                                      'from-sense': 'HORSE-N2',
                                      'token': 'horse',
                                      'word-ind': 7},
                      'PAY-ATTENTION-9': {'AGENT': {'value': 'DOG-9'},
                                          'THEME': {'value': 'HORSE-GYM-9'},
                                          'concept': 'PAY-ATTENTION',
                                          'from-sense': 'FOLLOW-V11',
                                          'in-tree': 'events',
                                          'syn-roles': ['SUBJECT',
                                                        'DIRECTOBJECT'],
                                          'token': 'follows',
                                          'word-ind': 4}},
              'concept_counts': {'DOG': {'count': 9, 'word-ind': [3]},
                                 'HORSE-GYM': {'count': 9,
                                               'word-ind': [7]},
                                 'PAY-ATTENTION': {'count': 9,
                                                   'word-ind': [4]}},
              'words': {'1': 'VERY-ADV1',
                        '2': 'LARGE-ADJ1',
                        '3': 'DOG-N1',
                        '4': 'FOLLOW-V11',
                        '6': 'BROWN-ADJ1',
                        '7': 'HORSE-N2'}},
             {'TMR': {'DOG-9': {'AGENT-OF': 'PURSUE-9',
                                'SIZE': 0.9,
                                'concept': 'DOG',
                                'from-sense': 'DOG-N1',
                                'token': 'dog',
                                'word-ind': 3},
                      'HORSE-9': {'COLOR': 'BROWN',
                                  'THEME-OF': 'PURSUE-9',
                                  'concept': 'HORSE',
                                  'from-sense': 'HORSE-N1',
                                  'token': 'horse',
                                  'word-ind': 7},
                      'PURSUE-9': {'AGENT': {'value': 'DOG-9'},
                                   'THEME': {'value': 'HORSE-9'},
                                   'concept': 'PURSUE',
                                   'from-sense': 'FOLLOW-V7',
                                  'in-tree': 'events',
                                   'syn-roles': ['SUBJECT',
                                                 'DIRECTOBJECT'],
                                   'token': 'follows',
                                   'word-ind': 4}},
              'concept_counts': {'DOG': {'count': 9, 'word-ind': [3]},
                                 'HORSE': {'count': 9,
                                           'word-ind': [7]},
                                 'PURSUE': {'count': 9,
                                            'word-ind': [4]}},
              'words': {'1': 'VERY-ADV1',
                        '2': 'LARGE-ADJ1',
                        '3': 'DOG-N1',
                        '4': 'FOLLOW-V7',
                        '6': 'BROWN-ADJ1',
                        '7': 'HORSE-N1'}},
             {'TMR': {'DOG-9': {'AGENT-OF': 'PURSUE-9',
                                'SIZE': 0.9,
                                'concept': 'DOG',
                                'from-sense': 'DOG-N1',
                                'token': 'dog',
                                'word-ind': 3},
                      'HORSE-GYM-9': {'COLOR': 'BROWN',
                                      'THEME-OF': 'PURSUE-9',
                                      'concept': 'HORSE-GYM',
                                      'from-sense': 'HORSE-N2',
                                      'token': 'horse',
                                      'word-ind': 7},
                      'PURSUE-9': {'AGENT': {'value': 'DOG-9'},
                                   'THEME': {'value': 'HORSE-GYM-9'},
                                   'concept': 'PURSUE',
                                   'from-sense': 'FOLLOW-V7',
                                  'in-tree': 'events',
                                   'syn-roles': ['SUBJECT',
                                                 'DIRECTOBJECT'],
                                   'token': 'follows',
                                   'word-ind': 4}},
              'concept_counts': {'DOG': {'count': 9, 'word-ind': [3]},
                                 'HORSE-GYM': {'count': 9,
                                               'word-ind': [7]},
                                 'PURSUE': {'count': 9,
                                            'word-ind': [4]}},
              'words': {'1': 'VERY-ADV1',
                        '2': 'LARGE-ADJ1',
                        '3': 'DOG-N1',
                        '4': 'FOLLOW-V7',
                        '6': 'BROWN-ADJ1',
                        '7': 'HORSE-N2'}},
             {'TMR': {'DOG-9': {'AGENT-OF': 'OBEY-9',
                                'SIZE': 0.9,
                                'concept': 'DOG',
                                'from-sense': 'DOG-N1',
                                'token': 'dog',
                                'word-ind': 3},
                      'HORSE-9': {'COLOR': 'BROWN',
                                  'THEME-OF': 'OBEY-9',
                                  'concept': 'HORSE',
                                  'from-sense': 'HORSE-N1',
                                  'token': 'horse',
                                  'word-ind': 7},
                      'OBEY-9': {'AGENT': {'value': 'DOG-9'},
                                 'THEME': {'value': 'HORSE-9'},
                                 'concept': 'OBEY',
                                 'from-sense': 'OBEY-V1',
                                 'syn-roles': ['SUBJECT',
                                               'DIRECTOBJECT'],
                                 'token': 'follows',
                                 'word-ind': 4}},
              'concept_counts': {'DOG': {'count': 9, 'word-ind': [3]},
                                 'HORSE': {'count': 9,
                                           'word-ind': [7]},
                                 'OBEY': {'count': 9, 'word-ind': [4]}},
              'words': {'1': 'VERY-ADV1',
                        '2': 'LARGE-ADJ1',
                        '3': 'DOG-N1',
                        '4': 'OBEY-V1',
                        '6': 'BROWN-ADJ1',
                        '7': 'HORSE-N1'}},
             {'TMR': {'DOG-9': {'AGENT-OF': 'OBEY-9',
                                'SIZE': 0.9,
                                'concept': 'DOG',
                                'from-sense': 'DOG-N1',
                                'token': 'dog',
                                'word-ind': 3},
                      'HORSE-GYM-9': {'COLOR': 'BROWN',
                                      'THEME-OF': 'OBEY-9',
                                      'concept': 'HORSE-GYM',
                                      'from-sense': 'HORSE-N2',
                                      'token': 'horse',
                                      'word-ind': 7},
                      'OBEY-9': {'AGENT': {'value': 'DOG-9'},
                                 'THEME': {'value': 'HORSE-GYM-9'},
                                 'concept': 'OBEY',
                                 'from-sense': 'OBEY-V1',
                                 'syn-roles': ['SUBJECT',
                                               'DIRECTOBJECT'],
                                 'token': 'follows',
                                 'word-ind': 4}},
              'concept_counts': {'DOG': {'count': 9, 'word-ind': [3]},
                                 'HORSE-GYM': {'count': 9,
                                               'word-ind': [7]},
                                 'OBEY': {'count': 9, 'word-ind': [4]}},
              'words': {'1': 'VERY-ADV1',
                        '2': 'LARGE-ADJ1',
                        '3': 'DOG-N1',
                        '4': 'OBEY-V1',
                        '6': 'BROWN-ADJ1',
                        '7': 'HORSE-N2'}}],
 'sent-num': 8,
 'sentence': 'A very large dog follows a brown horse.',
 'timestamp': '2016-Mar-25 12:37:21'}
]

module.exports = tmrs;
