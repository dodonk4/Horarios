const sqlForNewTable = () => {
    let schedules = [
        {celda_value: '08:00 - 09:00', celda_scndId: -1, celda_type: 'schedule'},
        {celda_value: '09:00 - 10:00', celda_scndId: -2, celda_type: 'schedule'},
        {celda_value: '10:00 - 11:00', celda_scndId: -3, celda_type: 'schedule'},
        {celda_value: '11:00 - 12:00', celda_scndId: -4, celda_type: 'schedule'},
        {celda_value: '12:00 - 13:00', celda_scndId: -5, celda_type: 'schedule'},
        {celda_value: '13:00 - 14:00', celda_scndId: -6, celda_type: 'schedule'},
        {celda_value: '14:00 - 15:00', celda_scndId: -7, celda_type: 'schedule'},
        {celda_value: '15:00 - 16:00', celda_scndId: -8, celda_type: 'schedule'},
        {celda_value: '16:00 - 17:00', celda_scndId: -9, celda_type: 'schedule'},
        {celda_value: '17:00 - 18:00', celda_scndId: -10, celda_type: 'schedule'},
        {celda_value: '18:00 - 19:00', celda_scndId: -11, celda_type: 'schedule'},
        {celda_value: '19:00 - 20:00', celda_scndId: -12, celda_type: 'schedule'},
        {celda_value: '20:00 - 21:00', celda_scndId: -13, celda_type: 'schedule'},
        {celda_value: '21:00 - 22:00', celda_scndId: -14, celda_type: 'schedule'},
        {celda_value: '22:00 - 23:00', celda_scndId: -15, celda_type: 'schedule'},
        {celda_value: '23:00 - 00:00', celda_scndId: -16, celda_type: 'schedule'}];
    let cells = [
        {celda_value: '', celda_scndId: 0.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 0.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 0.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 0.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 0.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 0.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 0.6, celda_type: 'cell'},
    
        {celda_value: '', celda_scndId: 1.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 1.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 1.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 1.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 1.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 1.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 1.6, celda_type: 'cell'},
    
        {celda_value: '', celda_scndId: 2.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 2.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 2.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 2.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 2.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 2.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 2.6, celda_type: 'cell'},
    
        {celda_value: '', celda_scndId: 3.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 3.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 3.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 3.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 3.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 3.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 3.6, celda_type: 'cell'},
    
        {celda_value: '', celda_scndId: 4.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 4.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 4.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 4.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 4.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 4.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 4.6, celda_type: 'cell'},
    
        {celda_value: '', celda_scndId: 5.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 5.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 5.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 5.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 5.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 5.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 5.6, celda_type: 'cell'},

        {celda_value: '', celda_scndId: 6.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 6.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 6.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 6.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 6.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 6.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 6.6, celda_type: 'cell'},
        
        {celda_value: '', celda_scndId: 7.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 7.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 7.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 7.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 7.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 7.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 7.6, celda_type: 'cell'},

        {celda_value: '', celda_scndId: 8.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 8.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 8.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 8.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 8.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 8.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 8.6, celda_type: 'cell'},

        {celda_value: '', celda_scndId: 9.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 9.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 9.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 9.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 9.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 9.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 9.6, celda_type: 'cell'},

        {celda_value: '', celda_scndId: 10.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 10.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 10.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 10.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 10.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 10.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 10.6, celda_type: 'cell'},

        {celda_value: '', celda_scndId: 11.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 11.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 11.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 11.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 11.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 11.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 11.6, celda_type: 'cell'},

        {celda_value: '', celda_scndId: 12.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 12.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 12.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 12.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 12.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 12.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 12.6, celda_type: 'cell'},
        
        {celda_value: '', celda_scndId: 13.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 13.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 13.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 13.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 13.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 13.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 13.6, celda_type: 'cell'},

        {celda_value: '', celda_scndId: 14.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 14.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 14.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 14.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 14.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 14.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 14.6, celda_type: 'cell'},

        {celda_value: '', celda_scndId: 15.0, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 15.1, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 15.2, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 15.3, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 15.4, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 15.5, celda_type: 'cell'},
        {celda_value: '', celda_scndId: 15.6, celda_type: 'cell'}
        // {celda_value: 'Nueva Tabla', celda_scndId: 5.6},
    ];

    const sqlArray = [schedules, cells];
    return sqlArray;
}