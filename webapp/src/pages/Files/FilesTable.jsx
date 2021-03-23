import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import MaterialTable from 'material-table';

import setClipboardText from '../../utils/clipboard';

import showStandardSnackbar from '../../app/showStandardSnackbar';

const PAGE_SIZES = [5, 10, 15, 30, 50, 75, 100];

const COLUMNS = [
  {
    field: 'name',
    title: 'Name',
    numeric: false,
    align: 'center',
  },
  {
    field: 'modifiedAt',
    title: 'Last modified',
    numeric: false,
    type: 'date',
    align: 'center',
  },
  {
    field: 'modifiedBy',
    title: 'Modified By',
    align: 'center',
  },
  {
    field: 'version',
    title: 'Version',
    type: 'numeric',
    align: 'center',
  },
  {
    field: 'size',
    title: 'Size',
    align: 'center',
  },
];

function FilesTable(props) {
  const { t } = useTranslation();
  const { className, data, onFileDelete, onFileDownload, onReload } = props;
  // TODO: add correct value on Widget components
  const filesPluralLiteral = t('file_plural');
  return (
    <MaterialTable
      title={filesPluralLiteral}
      columns={COLUMNS}
      data={data}
      options={{
        filtering: true,
        columnsButton: false,
        exportButton: true,
        exportFileName: 'data',
        grouping: false,
        pageSize: 5,
        pageSizeOptions: PAGE_SIZES,
        actionsColumnIndex: -1,
        headerStyle: {
          fontSize: '0.75rem',
          fontWeight: 500,
          fontFamily: 'Roboto',
        },
        rowStyle: {
          fontSize: '0.75rem',
          fontFamily: 'Roboto',
        },
      }}
      localization={{ header: { actions: '' } }} // disable localization header name
      actions={[
        {
          icon: 'autorenew',
          isFreeAction: true,
          onClick: onReload,
          tooltip: t('reload'),
        },
        {
          icon: 'download',
          iconProps: { className: `${className} actionIcon` },
          onClick: (event, rowData) => {
            showStandardSnackbar('Download file');
            onFileDownload(rowData);
          },
          tooltip: `${t('download')} ${t('file')}`,
        },
        {
          icon: 'content_copy',
          iconProps: { className: `${className} actionIcon` },
          onClick: (event, rowData) => {
            showStandardSnackbar('Copy file key');
            setClipboardText(rowData.name);
          },
          tooltip: 'Copy File Key',
        },
        {
          icon: 'delete',
          iconProps: { className: `${className} actionIcon` },
          onClick: (event, rowData) => {
            showStandardSnackbar('Delete file');
            onFileDelete(rowData);
          },
          tooltip: 'Delete File',
        },
      ]}
    />
  );
}

FilesTable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(Object),
  onFileDownload: PropTypes.func,
  onFileDelete: PropTypes.func,
  onReload: PropTypes.func,
};

FilesTable.defaultProps = {
  className: '',
  data: [
    {
      name: 'Foobar',
      modifiedAt: 'a month ago',
      modifiedBy: 'admin',
      version: 2,
      size: '8.32 mb',
      fileKey: 'datasets%2Fnews-categorized.csv.v1',
    },
  ],
  onFileDelete: () => {},
  onFileDownload: () => {},
  onReload: () => {},
};

export default FilesTable;