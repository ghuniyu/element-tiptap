export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Tebal',
      },
      Underline: {
        tooltip: 'Garis Bawah',
      },
      Italic: {
        tooltip: 'Miring',
      },
      Strike: {
        tooltip: 'Coret',
      },
      Heading: {
        tooltip: 'Judul',
        buttons: {
          paragraph: 'Paragraf',
          heading: 'Judul',
        }
      },
      Blockquote: {
        tooltip: 'Kutipan',
      },
      CodeBlock: {
        tooltip: 'Area Kode',
      },
      Link: {
        add: {
          tooltip: 'Terapkan tautan',
          control: {
            title: 'Terapkan Tautan',
            href: 'Tautan / Link',
            open_in_new_tab: 'Buka di tab baru',
            confirm: 'Simpan',
            cancel: 'Batal',
          },
        },
        edit: {
          tooltip: 'Ubah tautan',
          control: {
            title: 'Ubah tautan',
            href: 'Tautan / Link',
            open_in_new_tab: 'Buka di tab baru',
            confirm: 'Perbarui',
            cancel: 'Batal',
          },
        },
        unlink: {
          tooltip: 'Hapus Tautan',
        },
        open: {
          tooltip: 'Buka Tautan',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Masukan gambar',
            external: 'Masukan Gambar menggunakan Tautan',
            upload: 'Unggah Gambar',
          },
          remove_image: {
            tooltip: 'Hapus',
          },
          image_options: {
            tooltip: 'Opsi Gambar',
          },
          display: {
            tooltip: 'Display',
            inline: 'Inline',
            block: 'Break Text',
            left: 'Float Left',
            right: 'Float Right',
          },
        },
        control: {
          insert_by_url: {
            title: 'Insert image',
            placeholder: 'Url of image',
            confirm: 'Insert',
            cancel: 'Cancel',
            invalid_url: 'Please enter the correct url',
          },
          upload_image: {
            title: 'Upload image',
            button: 'Choose an image file or drag it here',
          },
          edit_image: {
            title: 'Edit image',
            confirm: 'Update',
            cancel: 'Cancel',
            form: {
              src: 'Image Url',
              alt: 'Alternative Text',
              width: 'Width',
              height: 'Height',
            },
          },
        },
      },
      Iframe: {
        tooltip: 'Insert video',
        control: {
          title: 'Insert video',
          placeholder: 'Href',
          confirm: 'Insert',
          cancel: 'Cancel',
        },
      },
      BulletList: {
        tooltip: 'Bullet list',
      },
      OrderedList: {
        tooltip: 'Ordered list',
      },
      TodoList: {
        tooltip: 'Todo list',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Align left',
          },
          align_center: {
            tooltip: 'Align center',
          },
          align_right: {
            tooltip: 'Align right',
          },
          align_justify: {
            tooltip: 'Align justify',
          },
        },
      },
      FontType: {
        tooltip: 'Font family',
      },
      FontSize: {
        tooltip: 'Font size',
        default: 'default',
      },
      TextColor: {
        tooltip: 'Text color',
      },
      TextHighlight: {
        tooltip: 'Text highlight',
      },
      LineHeight: {
        tooltip: 'Line height',
      },
      Table: {
        tooltip: 'Table',
        buttons: {
          insert_table: 'Insert Table',
          add_column_before: 'Add Column Before',
          add_column_after: 'Add Column After',
          delete_column: 'Delete Column',
          add_row_before: 'Add Row Before',
          add_row_after: 'Add Row After',
          delete_row: 'Delete Row',
          merge_cells: 'Merge Cells',
          split_cell: 'Split Cell',
          delete_table: 'Delete Table',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Indent',
          },
          outdent: {
            tooltip: 'Outdent',
          },
        },
      },
      FormatClear: {
        tooltip: 'Clear format',
      },
      HorizontalRule: {
        tooltip: 'Horizontal rule',
      },
      History: {
        tooltip: {
          undo: 'Undo',
          redo: 'Redo',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Full screen',
          exit_fullscreen: 'Exit full screen',
        },
      },
      Print: {
        tooltip: 'Print',
      },
      Preview: {
        tooltip: 'Preview',
        dialog: {
          title: 'Preview',
        },
      },
      SelectAll: {
        tooltip: 'Select all',
      },
      CodeView: {
        tooltip: 'Code view',
      },
    },
    characters: 'Characters',
  },
};
