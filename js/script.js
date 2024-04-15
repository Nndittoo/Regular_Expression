$(function ()
{
    const URLRegex = new RegExp('^(https?:\\/\\/)?' + // PROTOCOL
        '((([a-zA-Z\\d]([a-zA-Z\\d-]{0,61}[a-zA-Z\\d])?)\\.)+[a-zA-Z]{2,}|' + // DOMAIN NAME
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IPv4 ADDRESS
        '(\\:\\d+)?' + // PORT
        '(\\/[-a-zA-Z\\d%@_.~+&:]*)*' + // PATH
        '(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?' + // QUERY STRING
        '(\\#[-a-zA-Z\\d_]*)?$', 'i'); // FRAGMENT LOCATOR
    const kata = /\b\w{10,}\b/;
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Setidaknya ada 1 huruf kecil 1 huruf besar 1 angka 1 karakter khusus
    const namaFile = /^.*\.(jpg|jpeg|png|gif|pdf|doc|docx)$/;

    $('input').each(function ()
    {
        $(this).on('focus', function ()
        {
            $(this).closest($('.por')).addClass('bg-[#EADBC8] ')
        })

        $(this).on('blur', function ()
        {
            $(this).closest($('.por')).removeClass('bg-[#EADBC8]')
            pElement.html('')
        })

        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('article');
            const errorElement = $(this).parent().find('.error-icon');
            const succsesElement = $(this).parent().find('.succses-icon');
            const groupElement = $(this).parent().find('.group');
            const inputElement = $(this);
            const inputValue = inputElement.val();


            if ($(this).attr('id') == 'url') {
                if (URLRegex.test($(this).val())) {
                    pElement.html('Valid URL');
                    pElement.addClass('text-emerald-700');
                    inputElement.removeClass('border-red-700');
                    inputElement.addClass('border-emerald-700');
                    errorElement.addClass('hidden');
                    errorElement.removeClass('block');
                    succsesElement.addClass('block');
                    succsesElement.removeClass('hidden');
                } 
                else if (!inputValue) {
                    errorElement.removeClass('block');
                    errorElement.addClass('hidden');
                    succsesElement.removeClass('block');
                    succsesElement.addClass('hidden');
                    groupElement.removeClass('hidden');
                    groupElement.addClass('block');
                    inputElement.removeClass('border-red-700');
                    pElement.addClass('hidden');
                }
                else {
                    inputElement.addClass('border-red-700');
                    inputElement.removeClass('border-emerald-700');
                    pElement.html('Invalid URL! Masukkan URL yang benar.');
                    pElement.removeClass('text-emerald-700');
                    pElement.addClass('text-rose-700');
                    groupElement.addClass('hidden');
                    errorElement.addClass('block');
                    errorElement.removeClass('hidden');
                    succsesElement.addClass('hidden');
                    succsesElement.removeClass('block');
                }
            }
            else if ($(this).attr('id') == "kata")
            {
                if (kata.test($(this).val()))
                {
                    pElement.html('Total kata sudah 10 👌')
                    pElement.removeClass('text-indigo-700 text-rose-700')
                    pElement.addClass('text-emerald-700')
                    inputElement.removeClass('border-red-700')
                    errorElement.addClass('hidden');
                    errorElement.removeClass('block');
                    succsesElement.addClass('block');
                    succsesElement.removeClass('hidden');
                }
                else if (!inputValue) {
                    errorElement.removeClass('block');
                    errorElement.addClass('hidden');
                    succsesElement.removeClass('block');
                    succsesElement.addClass('hidden');
                    groupElement.removeClass('hidden');
                    groupElement.addClass('block');
                    inputElement.removeClass('border-red-700');
                    pElement.addClass('hidden');
                }
                else
                {
                    inputElement.addClass('border-red-700');
                    pElement.html('Minimal 10 kata !.')
                    pElement.removeClass('text-indigo-700 text-emerald-700')
                    pElement.addClass('text-rose-700')
                    groupElement.addClass('hidden');
                    errorElement.addClass('block');
                    errorElement.removeClass('hidden');
                    succsesElement.addClass('hidden');
                    succsesElement.removeClass('block');
                }
            }
            else if ($(this).attr('id') == "email")
            {
                if (email.test($(this).val()))
                {
                    pElement.html('Emaiil Valid !!')
                    pElement.removeClass('text-indigo-700 text-rose-700')
                    pElement.addClass('text-emerald-700')
                    inputElement.removeClass('border-red-700')
                    errorElement.addClass('hidden');
                    errorElement.removeClass('block');
                    succsesElement.addClass('block');
                    succsesElement.removeClass('hidden');
                }
                else if (!inputValue) {
                    errorElement.removeClass('block');
                    errorElement.addClass('hidden');
                    succsesElement.removeClass('block');
                    succsesElement.addClass('hidden');
                    groupElement.removeClass('hidden');
                    groupElement.addClass('block');
                    inputElement.removeClass('border-red-700');
                    pElement.addClass('hidden');
                }
                else
                {
                    inputElement.addClass('border-red-700');
                    pElement.html('Email Tidak Valid.')
                    pElement.removeClass('text-indigo-700 text-emerald-700')
                    pElement.addClass('text-rose-700')
                    groupElement.addClass('hidden');
                    errorElement.addClass('block');
                    errorElement.removeClass('hidden');
                    succsesElement.addClass('hidden');
                    succsesElement.removeClass('block');
                }
            }
            else if ($(this).attr('id') == "pass")
            {
                if (password.test($(this).val()))
                {
                    pElement.html('Password Kuat 🔥')
                    pElement.removeClass('text-indigo-700 text-rose-700')
                    pElement.addClass('text-emerald-700')
                    inputElement.removeClass('border-red-700')
                    errorElement.addClass('hidden');
                    errorElement.removeClass('block');
                    succsesElement.addClass('block');
                    succsesElement.removeClass('hidden');
                }
                else if (!inputValue) {
                    errorElement.removeClass('block');
                    errorElement.addClass('hidden');
                    succsesElement.removeClass('block');
                    succsesElement.addClass('hidden');
                    groupElement.removeClass('hidden');
                    groupElement.addClass('block');
                    inputElement.removeClass('border-red-700');
                    pElement.addClass('hidden');
                }
                else
                {
                    pElement.html('Password lemah !😭')
                    pElement.removeClass('text-indigo-700 text-emerald-700')
                    pElement.addClass('text-rose-700')
                    inputElement.addClass('border-red-700');
                    groupElement.addClass('hidden');
                    errorElement.addClass('block');
                    errorElement.removeClass('hidden');
                    succsesElement.addClass('hidden');
                    succsesElement.removeClass('block');
                }
            }
            else if ($(this).attr('id') == "file")
            {
                if (namaFile.test($(this).val()))
                {
                    pElement.html('Ekstensi Valid')
                    pElement.removeClass('text-indigo-700 text-rose-700')
                    pElement.addClass('text-emerald-700')
                    inputElement.removeClass('border-red-700')
                    errorElement.addClass('hidden');
                    errorElement.removeClass('block');
                    succsesElement.addClass('block');
                    succsesElement.removeClass('hidden');
                }
                else if (!inputValue) {
                    errorElement.removeClass('block');
                    errorElement.addClass('hidden');
                    succsesElement.removeClass('block');
                    succsesElement.addClass('hidden');
                    groupElement.removeClass('hidden');
                    groupElement.addClass('block');
                    inputElement.removeClass('border-red-700');
                    pElement.addClass('hidden');
                }
                else
                {
                    pElement.html('File harus berbentuk .jpg, .jpeg, .png, .gif, .pdf, .doc, dan .docx')
                    pElement.removeClass('text-indigo-700 text-emerald-700')
                    pElement.addClass('text-rose-700')
                    inputElement.addClass('border-red-700');
                    groupElement.addClass('hidden');
                    errorElement.addClass('block');
                    errorElement.removeClass('hidden');
                    succsesElement.addClass('hidden');
                    succsesElement.removeClass('block');
                }
            }

        })
    })
})