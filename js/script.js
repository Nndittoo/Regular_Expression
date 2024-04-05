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
        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == 'url')
            {
                if (URLRegex.test($(this).val()))
                {
                    pElement.html('Valid URL')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    pElement.html('Invalid URL! Masukkan URL yang benar.')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "kata")
            {
                if (kata.test($(this).val()))
                {
                    pElement.html('Total kata sudah 10 👌')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")
                    pElement.html('Minimal 10 kata !.')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "email")
            {
                if (email.test($(this).val()))
                {
                    pElement.html('Emaiil Valid !!')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    pElement.html('Email Tidak Valid.')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "pass")
            {
                if (password.test($(this).val()))
                {
                    pElement.html('Password Kuat 🔥')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    pElement.html('Password lemah !😭')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "file")
            {
                if (namaFile.test($(this).val()))
                {
                    pElement.html('Ekstensi Valid')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    pElement.html('File harus berbentuk .jpg, .jpeg, .png, .gif, .pdf, .doc, dan .docx')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }

        })
    })
})